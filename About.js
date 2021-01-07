import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import imageA from './assets/adaptive-icon.png';

const blockA=`Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a
  type specimen book. It has survived not only five centuries
  , but also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages,
  and more recently with desktop publishing software like Aldus
  PageMaker including versions of Lorem Ipsum.`;

  const blockB = `It is a long established fact that a reader
  will be distracted by the readable content of a page when
  looking at its layout. The point of using Lorem Ipsum is
  that it has a more-or-less normal distribution of letters,
   as opposed to using 'Content here, content here', making
   it look like readable English. Many desktop publishing`;

export default function AboutTrav(){
  return(
      <View  style={styles.container}>
          <ScrollView>
              <Image source={imageA} style={{width: '100%',
              height:300}} />
              <Text style={styles.heading}>We are  different</Text>
              <Text style={styles.text}>{blockA}</Text>
              <Image source={imageA} style={{width: '100%',
              height:300}} />
              <Text style={styles.heading}>Leaders in our field</Text>
              <Text style={styles.text}>{blockB}</Text>
              <Image source={imageA} style={{width: '100%',
              height:300}} />
              <Text style={styles.heading}>We are the Experts</Text>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    paddingTop: 5
  },
  text: {
    fontFamily: 'OpenSans'
  }
});
