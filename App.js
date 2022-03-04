import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

//data 

const chats = [
  { id: '1', text: 'Learn JavaScript',name:"Aakib Javed" },
  { id: '2', text: 'Learn React',name:"Wasif" },
  { id: '3', text: 'Learn JavaScript',name:"saad" },
  { id: '4', text: 'Learn React',name:"Ali Murtaza" },
  { id: '5', text: 'Learn JavaScript',name:"saad" },
  { id: '6', text: 'Learn React',name:"aakib" },
  { id: '7', text: 'Learn TypeScript',name:"Hassab" },
  { id: '8', text: 'Learn React',name:"Waqas" },
  { id: '9', text: 'Learn JavaScript',name:"Adil" },
  { id: '10', text: 'Learn React',name:"Umar" },
  { id: '11', text: 'Learn TypeScript',name:"Abd. Rehmman" },
];

// draw a line after a list itrm
const Separator = () => <View style={styles.itemSeparator} />;

// left swip
const LeftSwipeActions = () => {
  return (
    <View
    // here if we add property flex 1 it complete
      style={{ 
        flex:0.2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:"center",
         }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize:18,
        }}
      >
        Delete
      </Text>
    </View>
  );
};

// right swip gesture
const rightSwipeActions = () => {
  return (
    <View
      style={{
        flex:0.4,
        justifyContent: 'center',
        flexDirection:"row"
      }}>
        {/* // first btn view */}
      <View style={{
        flex:0.5,
        backgroundColor: '#708090',
        justifyContent:"center",
        alignItems:"center",
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
          }}>
              More
        </Text>
      </View>

        {/* view for second btn */}
      <View style={{
        flex:0.5,
        backgroundColor: '#4169E1',
        justifyContent:"center",
        alignItems:"center",
        }}>
        <Text
          style={{
            color: '#1b1a17',
            fontWeight: '600',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
              Archive
        </Text>
      </View>
    </View>
  );
};
// complete swips
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};


// style the single item in a flat list
const ListItem = (text) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View style={styles.chat}>
    
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('./assests/profile.jpeg')}
        />
      </View>

      <View style={styles.nameWrapper}>
        <Text style={styles.nameText}>
          {text.name}
        </Text>
        <Text style={styles.latestChatText}>
          {text.text}
        </Text>
      </View>

      <View style={styles.batchWrapper}>
        <Text style={styles.timeText}>
          Yesterday
        </Text>
        <View style={styles.batckBackground}>
          <Text style={styles.batchText}>1</Text>
        </View>
      </View>

    </View>
  </Swipeable>
);

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>
          Chats
        </Text>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
    width:"85%",
    marginLeft:"15%",
  },
  heading:{
    marginTop:15,
    marginBottom:10,
    marginLeft:20,
    fontSize:24,
    fontWeight:"bold",

  },
  chat:{
    flex:1,
    flexDirection:"row",
    height:70,
    backgroundColor: '#D3D3D3',
  },
  imageWrapper:{
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width:"80%",
    height:"80%",
    borderRadius:50
  },
  nameWrapper:{
    flex:0.7,
    marginLeft:15,
    marginTop:12,
  },
  nameText:{
    fontSize:18,
    fontWeight:"bold"
  },
  latestChatText:{
    fontSize:16,
    marginTop:5,
    fontWeight:"400"
  },
  batchWrapper:{
    flex:0.3,
    alignItems:"center",
  },
  timeText:{
    fontSize:16,
    marginTop:8,
    color:"#191970",
    fontWeight:"400",
  },
  batckBackground:{
    backgroundColor:"#1E90FF",
    display:"flex",
    width:22,
    height:22,
    borderRadius:50,
    marginTop:5,
    justifyContent:"center",
    alignItems:"center"
  },
  batchText:{
    color:"white",
    fontWeight:"bold",
  },

});
export default App;