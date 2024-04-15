import { Client, Account, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.react_native_tutorial.aora",
  projectId: "661dab2ce50601ef9315",
  databaseId: "661dac6a304277e39b3f",
  userCollectionId: "661dac85719373a4018f",
  videoCollectionId: "661dacaca9d8d47003df",
  storageId: "661dae0e43f370c755ce",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
