import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const UpdateMenu = () => {
  const [activeTab, setActiveTab] = useState("drinks");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: activeTab === "drinks" ? "blue" : "gray",
          }}
          onPress={() => handleTabChange("drinks")}
        >
          <Text style={{ color: "white" }}>Add a Drink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: activeTab === "dishes" ? "blue" : "gray",
          }}
          onPress={() => handleTabChange("dishes")}
        >
          <Text style={{ color: "white" }}>Add a Dish</Text>
        </TouchableOpacity>
      </View>

      {activeTab === "drinks" && <View>{/* Add drink form */}</View>}

      {activeTab === "dishes" && <View>{/* Add dish form */}</View>}
    </View>
  );
};
