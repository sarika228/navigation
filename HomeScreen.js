const HomeScreen = ({navigation}) => {
    return(
        <Button
            title="Go to jane's profile"
            onPress={()=>
                navigation.navigate('Profile',{name:'Jane'})
            }
        
        />
    );
};
const ProfileScreen = ({navigation, route}) => {
    return <Text> This is {route.params.name}'s profile</Text>
};