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
import AtmLocatorScreen from "../screens/AtmLocatorScreen";
import SaveMoneyScreen from "../screens/SaveMoneyScreen";

const Drawer: any = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={""} onPress={() => {}} />
      </DrawerContentScrollView>
      <View
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: "50%",
          // backgroundColor: "#f6f6f6",
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View>
            <Text>Others</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: "44%",
          // backgroundColor: "#f6f6f6",
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View>
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
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
      <Drawer.Screen
        name="AtmLocatorScreen"
        component={AtmLocatorScreen}
        options={{ headerShown: false, drawerLabel: "ATM Locator" }}
      />
      <Drawer.Screen
        name="SaveMoneyScreen"
        component={SaveMoneyScreen}
        options={{ headerShown: false, drawerLabel: "Save Money" }}
      />
    </Drawer.Navigator>
  );
}
