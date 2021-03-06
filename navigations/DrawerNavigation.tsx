import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { home, equivalence, copy_copy, referral } from "../constants/icon";
import { List } from "react-native-paper";
// Drawer Screens
import TabScreen from "./TabNavigation";
import TransferScreen from "../screens/TransferScreen";
import BillsAndPaymentScreen from "../screens/BillsAndPaymentScreen";
import ReferalScreen from "../screens/ReferalScreen";
import AtmLocatorScreen from "../screens/AtmLocatorScreen";
import SaveMoneyScreen from "../screens/SaveMoneyScreen";
import { COLORS } from "../constants/theme";
import { cross } from "../constants/icon";
import { ellipse } from "../constants/images";

const Drawer: any = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ ...styles.topView }}>
          <>
            <AntDesign
              name="close"
              size={24}
              color={COLORS.primary}
              style={{ ...styles.closeIcon }}
              onPress={() => props.navigation.closeDrawer()}
            />
          </>
          <View></View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={""} onPress={() => {}} />
      </DrawerContentScrollView>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <View
          style={{
            // position: "absolute",
            right: 0,
            left: 0,
            // bottom: "0%",
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
              <Text style={{ ...styles.drawerLabelStyle }}>Others</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // position: "absolute",
            right: 0,
            left: 0,
            // bottom: "0%",
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
            <Text style={{ ...styles.drawerLabelStyle }}>Sign Out</Text>

            <FontAwesome
              name="sign-out"
              size={25}
              color={COLORS.primary}
              style={{ width: 20 }}
            />
          </TouchableOpacity>
        </View>
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
        options={{
          headerShown: false,
          drawerLabel: "Home",
          drawerIcon: (props: any) => {
            return (
              <View>
                <Image
                  source={home}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ tintColor: COLORS.primary }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
          drawerActiveBackgroundColor: { ...styles.drawerActiveColor },
        }}
      />
      <Drawer.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{
          headerShown: false,
          drawerLabel: "Transfer",
          drawerIcon: (props: any) => {
            return (
              <View>
                <Image
                  source={equivalence}
                  style={{ tintColor: COLORS.primary, height: 16, width: 18 }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
        }}
      />
      <Drawer.Screen
        name="BillsAndPaymentScreen"
        component={BillsAndPaymentScreen}
        options={{
          headerShown: false,
          drawerLabel: "Bills & Payment",
          drawerIcon: (props: any) => {
            return (
              <View>
                <Image
                  source={copy_copy}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ tintColor: COLORS.primary }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
        }}
      />
      <Drawer.Screen
        name="ReferalScreen"
        component={ReferalScreen}
        options={{
          headerShown: false,
          drawerLabel: "Referral",
          drawerIcon: (props: any) => {
            return (
              <View>
                <Image
                  source={referral}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={{ tintColor: COLORS.primary }}
                  {...props}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
        }}
      />
      <Drawer.Screen
        name="AtmLocatorScreen"
        component={AtmLocatorScreen}
        options={{
          headerShown: false,
          drawerLabel: "ATM Locator",
          drawerIcon: (props: any) => {
            return (
              <View>
                <EvilIcons
                  name="location"
                  size={25}
                  color={COLORS.primary}
                  style={{ width: 20 }}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
        }}
      />
      <Drawer.Screen
        name="SaveMoneyScreen"
        component={SaveMoneyScreen}
        options={{
          headerShown: false,
          drawerLabel: "Save Money",
          drawerIcon: (props: any) => {
            return (
              <View>
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={24}
                  color={COLORS.primary}
                  style={{ width: 20 }}
                />
              </View>
            );
          },
          drawerLabelStyle: { ...styles.drawerLabelStyle },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerLabelStyle: {
    color: COLORS.primary,
    fontFamily: "Inter_Medium",
    fontSize: 17,
    lineHeight: 20,
  },
  drawerActiveColor: {
    backgroundColor: COLORS.activeBg,
  },
  topView: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  closeIcon: {
    alignSelf: "flex-end",
  },
});
