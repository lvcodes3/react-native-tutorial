import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

// onboarding screen //
export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] px-4 justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-center text-white font-bold">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="mt-7 text-sm text-center font-pregular text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          ></CustomButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
