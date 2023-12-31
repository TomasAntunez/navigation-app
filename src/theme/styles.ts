import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal:20
  },
  title: {
    fontSize: 30,
    color: 'black',
    marginBottom: 10
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  menuContainer: {
    margin: 30
  },
  menuButton: {
    marginVertical: 10
  },
  menuButtonText: {
    color: 'black',
    fontSize: 20
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
