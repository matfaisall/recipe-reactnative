import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import GlobalStyle from '../../assets/styles/style';
import Icon from 'react-native-vector-icons/Feather';

import fakeAvatar from '../../assets/images/fakeAvatar.jpg';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  // const userProfile = useSelector(state => state.loginReducer);

  // const [photoProfile, setPhotoProfile] = useState(null);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <SafeAreaView>
        <View style={{height: 310}}>
          <View style={styles.cardProfile}>
            <View style={{borderRadius: 84 / 2}}>
              <Image source={fakeAvatar} style={styles.imageStyle} />
            </View>
            <Text style={{fontSize: 20, marginTop: 16, fontWeight: 'medium'}}>
              {/* {userProfile.data.name} */}
              Faisal
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.card_list_wrapper}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <View style={styles.list_wrapper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="user"
                  size={24}
                  color={GlobalStyle.colors.font_primary}
                />
                <Text style={{marginStart: 8, fontSize: 16}}>Edit Profile</Text>
              </View>
              <Icon
                name="chevron-right"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyRecipe')}>
            <View style={styles.list_wrapper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="award"
                  size={24}
                  color={GlobalStyle.colors.font_primary}
                />
                <Text style={{marginStart: 8, fontSize: 16}}>My Recipe</Text>
              </View>
              <Icon
                name="chevron-right"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.list_wrapper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="bookmark"
                  size={24}
                  color={GlobalStyle.colors.font_primary}
                />
                <Text style={{marginStart: 8, fontSize: 16}}>Saved Recipe</Text>
              </View>
              <Icon
                name="chevron-right"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.list_wrapper}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="thumbs-up"
                  size={24}
                  color={GlobalStyle.colors.font_primary}
                />
                <Text style={{marginStart: 8, fontSize: 16}}>Liked Recipe</Text>
              </View>
              <Icon
                name="chevron-right"
                size={24}
                color={GlobalStyle.colors.font_primary}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  cardProfile: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.font_primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_list_wrapper: {
    height: 500,
    position: 'relative',
    backgroundColor: 'white',
    shadowColor: '#000',
    marginHorizontal: 16,
    top: -40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  list_wrapper: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageStyle: {
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
    overflow: 'hidden',
  },
});
