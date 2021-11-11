import React,{useState} from 'react';
import {
    View, 
    Text, 
    ImageBackground, 
    Image, 
    SafeAreaView, 
    Easing, 
    TouchableOpacity, 
    StyleSheet, 
    Dimensions,
    FlatList
} from 'react-native';
const {width,height} = Dimensions.get('screen');

class SubCategory extends React.Component {
    
    
    constructor(props) {
        super(props)
    }

}    
const API_KEY = "563492ad6f917000010000016b579a6b57e746c1a598533ca7e7975e";
const URL = "https://api.pexels.com/v1/search?query=animals&orientation=portrait&size=small&per_page=20";
const IMAGE_SIZE = 80;
const SPACING =10;

const FetchImagesFromPexels = async() => {
    const data = await fetch(URL,{
        headers :{
            'Authorization' : API_KEY
        }
    })
    var {photos} = await data.json();
    return photos
}
export default () => {
    
    const [images,setImages]=React.useState(null);
    
    React.useEffect(()=>{
        const fetchImages =  async () => {
            const I = await FetchImagesFromPexels();
            setImages(I);
        }
        fetchImages();
    },[]);

    const topRef = React.useRef();
    const bottomRef = React.useRef();
    const [activeIndex, setActiveIndex] = React.useState(0);

    const scrollToActiveIndex = (index)=>{
        setActiveIndex(index)
        topRef?.current?.scrollToOffset({
            offset : index*width,
            animated : true
        })
        if(index*(IMAGE_SIZE+SPACING)-IMAGE_SIZE/2 > width/2){
            bottomRef?.current?.scrollToOffset({
                offset:index*(IMAGE_SIZE+SPACING)-width/2 + IMAGE_SIZE/2,
                animated : true
            })
        }
        else{
            bottomRef?.current?.scrollToOffset({
                offset:0,
                animated : true
            })
        }
    }
    
    if(!images){
        return <View
        style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>
                Loading...
            </Text>
        </View>
    }

    return <View>
            <FlatList
            ref ={topRef}

            data = {images}
            keyExtractor = {item => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={ev=>{
                scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x/width))
            }}
            renderItem={({item})=>{
                return <View style = {{width,height}}>
                    <Image
                        source={ {uri : item.src.portrait}}
                        style={[StyleSheet.absoluteFillObject]}
                    />
                </View>

            }}
        />
        <FlatList
            ref ={bottomRef}
            data = {images}
            keyExtractor = {item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{position : 'absolute', bottom : 40}}
            contentContainerStyle = {{paddingHorizontal : SPACING }}
            renderItem={({item,index})=>{
                return <TouchableOpacity
                    onPress={()=>{scrollToActiveIndex(index)}}
                >
                    <Image
                        source={ {uri : item.src.portrait}}
                        style={{
                            width : IMAGE_SIZE,
                            height : IMAGE_SIZE,
                            borderRadius : 10,
                            marginRight : SPACING,
                            borderWidth : 2,
                            borderColor : activeIndex===index ? '#fff':'transparent'
                        }}
                    />
                </TouchableOpacity>
            }}
        />    
    </View>
}   