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
const Customer = [
  { id: 0, name: 'Customer 1', salary: '199' },
  { id: 1, name: 'Customer 2', salary: '299' },
  { id: 2, name: 'Customer 3', salary: '399' },
  { id: 3, name: 'Customer 4', salary: '499' },
  { id: 4, name: 'Customer 5', salary: '599' },
];
// Parent vanthu Class Component but ithu Child Component.... Start with capital letter and name salaru props ah pass aagiduchi
function RenderItem({ name, salary, id }) {
  // onPress-la id pass pannittu antha id vanthu props ah pass aagum. press pannumbothu handlePressla pass aagum.
  const handlePress = (id) => {
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
  return (
    <TouchableOpacity
      // handlePressla id props ah eduthukkittu. athai Componentla props ah value pass aaguthu
      onPress={() => handlePress(id)}
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  const;
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'purple' }}>
        <View style={{ backgroundColor: 'yellow' }}>
          <FlatList
            data={Customer}
            // renderItem ma ah irukka koodathu Start with CAPITAL LETTER
            renderItem={({ item }) => (
              <RenderItem name={item.name} salary={item.salary} id={item.id} />
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
