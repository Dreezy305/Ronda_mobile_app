import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
// Drawer Screens
import TabScreen from "./TabNavigation";
import TransferScreen from "../screens/TransferScreen";
import BillsAndPaymentScreen from "../screens/BillsAndPaymentScreen";
import ReferalScreen from "../screens/ReferalScreen";

const Drawer: any = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={""} onPress={() => {}} />
      </DrawerContentScrollView>
    </View>
  );
}

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => {
        return (
          <>
            <CustomDrawerContent {...props} />
          </>
        );
      }}
      screenOptions={{ swipeEnabled: true, keyboardDismissMode: "none" }}
    >
      <Drawer.Screen
        name="TabScreen"
        component={TabScreen}
        options={{ headerShown: false, drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{ headerShown: false, drawerLabel: "Transfer" }}
      />
      <Drawer.Screen
        name="BillsAndPaymentScreen"
        component={BillsAndPaymentScreen}
        options={{ headerShown: false, drawerLabel: "Bills & Payment" }}
      />
      <Drawer.Screen
        name="ReferalScreen"
        component={ReferalScreen}
        options={{ headerShown: false, drawerLabel: "Referral" }}
      />
    </Drawer.Navigator>
  );
}
