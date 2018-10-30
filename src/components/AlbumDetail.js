import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle,
            headerContentStyle,
            thumbnailConteinerStyle,
            headerTextStyle,
            imageStyle
    } = styles;

    return (
        <Card>
            {/* Thumbnail, title and artist name */}
            <CardSection>
                <View style={thumbnailConteinerStyle} >
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            {/* Album image */}
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            {/* Button */}
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailConteinerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
