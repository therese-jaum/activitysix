import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'ironman', password: 'jarvis123', usertype: 'Hero' },
  { ID: 2, username: 'spiderman', password: 'webcrawler456', usertype: 'Hero' },
  { ID: 3, username: 'captainamerica', password: 'shield567', usertype: 'Hero' },
  { ID: 4, username: 'blackwidow', password: 'redroom789', usertype: 'Heroine' },
  { ID: 5, username: 'thor', password: 'mjolnir098', usertype: 'God' },
  { ID: 6, username: 'hulk', password: 'smash321', usertype: 'Hero' },
  { ID: 7, username: 'blackpanther', password: 'wakanda234', usertype: 'Hero' },
  { ID: 8, username: 'scarletwitch', password: 'chaosmagic876', usertype: 'Heroine' },
  { ID: 9, username: 'doctorstrange', password: 'mysticarts555', usertype: 'Hero' },
  { ID: 10, username: 'wolverine', password: 'adamantium777', usertype: 'Antihero' },
];


const usersData = [
  { ID: 1, firstname: 'Aang', lastname: 'Cormier', course: 'BSIT', year: '1', section: 'A' },
  { ID: 2, firstname: 'Katara', lastname: 'Kiawentio', course: 'BSCRIM', year: '2', section: 'B' },
  { ID: 3, firstname: 'Sokka', lastname: 'Ousley', course: 'BSIT', year: '3', section: 'C' },
  { ID: 4, firstname: 'Zuko', lastname: 'Lui', course: 'BSED', year: '4', section: 'D' },
  { ID: 5, firstname: 'Iroh', lastname: 'Lee', course: 'BEED', year: '2', section: 'A' },
  { ID: 6, firstname: 'Momo', lastname: 'Nomads', course: 'BS-ELEC', year: '1', section: 'B' },
  { ID: 7, firstname: 'Appa', lastname: 'Nomads', course: 'BS-ELEC', year: '3', section: 'C' },
  { ID: 8, firstname: 'Azula', lastname: 'Yu', course: 'BSCRIM', year: '4', section: 'D' },
  { ID: 9, firstname: 'Suki', lastname: 'Zhang', course: 'BEED', year: '3', section: 'A' },
  { ID: 10, firstname: 'Ty Lee', lastname: 'Tran', course: 'BSIT', year: '4', section: 'B' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'Hero')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    tableContainer: { marginTop: 10, marginBottom: 20 },
    head: { height: 40, backgroundColor: '#6495ED' }, 
    text: { margin: 6, textAlign: 'center', fontFamily: 'Montserrat', color: '#333' }, 
  });
  
  const App = () => {
    const renderTable = (data, headers) => (
      <Table borderStyle={{ borderWidth: 1, borderColor: '#4169E1' }}>
        <Row data={headers} style={styles.head} textStyle={styles.text} />
        {data.map((rowData, index) => (
          <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
        ))}
      </Table>
    );
  
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4682B4' }}>Accounts Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4682B4' }}>Users Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#4682B4' }}>Students Table</Text>
        <ScrollView style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#4169E1' }}>
            <Row data={['ID', 'Name', 'Course']} style={styles.head} textStyle={styles.text} />
            <FlatList
              data={studentsData}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => (
                <Row data={[item.ID, item.name, item.course]} textStyle={styles.text} />
              )}
            />
          </Table>
        </ScrollView>
      </View>
    );
  };
  

export default App;