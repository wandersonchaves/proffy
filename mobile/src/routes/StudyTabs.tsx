import { Archivo_700Bold } from "@expo-google-fonts/archivo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Favorites from "../pages/Favorites";
import TeacherList from "../pages/TeacherList";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabBarStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: { flex: 0.75, width: 16, height: 16 },
        tabBarLabelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: "#fafafc",
        tabBarActiveBackgroundColor: "#ebebf5",
        tabBarInactiveTintColor: "#c1bccc",
        tabBarActiveTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel-outline"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart-outline"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
