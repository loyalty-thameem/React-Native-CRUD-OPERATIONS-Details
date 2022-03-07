import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
// dummyData 
let Customer = [
  { id: 0, name: 'Customer 1', salary: '199' },
  { id: 1, name: 'Customer 2', salary: '299' },
  { id: 2, name: 'Customer 3', salary: '399' },
  { id: 3, name: 'Customer 4', salary: '499' },
  { id: 4, name: 'Customer 5', salary: '599' },
];
// Parent vanthu Class Component but ithu Child Component.... Start with capital letter and name salaru props ah pass aagiduchi
function RenderItem({ name, salary, id, navigation }) {
  // onPress-la id pass pannittu antha id vanthu props ah pass aagum. press pannumbothu handlePressla pass aagum.
  const handleLongPress = (id) => {
    // customerla id check panni id ah check panni  alert work aagum
    const customer = Customer.find((cust) => {
      // cust.id vera. intha id vera but rendume onnethaan check pannuthu
      return cust.id === id;
    });
    Alert.alert(
      'hello',
      ` name:${customer.name} and salary:${customer.salary}`
    );
  };
  const handlePress = (id) => {
    const customer = Customer.find((cust) => {
      // cust.id vera. intha id vera but rendume onnethaan check pannuthu
      return cust.id === id;
    });
    console.log(customer);
    // ithu maathuri use panna koodathu
    // const helloCustomer = Customer.filter((cust) => {
    //   return cust.id !== id;
    // });
    // Customer epdi use pannanum
    Customer = Customer.filter((cust) => {
      return cust.id !== id;
    });
    // this.props.navigation props ah navigationla ah pass panni MainScreen ah index:0 muliyama ah reset aagum. athaadaavathu new screen kidaikum
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'MainScreen',
        },
      ],
    });
    // console.log(helloCustomer)
    console.log(Customer);
  };
  return (
    <TouchableOpacity
      // handlePressla id props ah eduthukkittu. athai Componentla props ah value pass aaguthu
      onPress={() => handlePress(id)}
      onLongPress={() => handleLongPress(id)}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
        marginVertical: 10,
        paddingVertical: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'darkblue',
          backgroundColor: 'lightblue',
          marginLeft: 20,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'red',
          backgroundColor: 'lightblue',
          marginRight: 20,
        }}>
        {salary}
      </Text>
    </TouchableOpacity>
  );
}
// Header component Scroll ah aagum.

function renderHeaderComp() {
  return (
    <View>
      <Text style={{ fontSize: 20, backgroundColor: 'white' }}>
        React Native FlatList Learn
      </Text>
    </View>
  );
}

export default class MainScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'purple' }}>
        <View style={{ backgroundColor: 'yellow' }}>
          <FlatList
            data={Customer}
            // renderItem ma ah irukka koodathu Start with CAPITAL LETTER
            renderItem={({ item }) => (
              <RenderItem
                navigation={this.props.navigation}
                name={item.name}
                salary={item.salary}
                id={item.id}
              />
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            // Header component Scroll ah aagum.
            ListHeaderComponent={renderHeaderComp}
            ListHeaderComponentStyle={{
              backgroundColor: 'red',
              paddingHorizontal: 70,
              paddingVertical: 20,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
