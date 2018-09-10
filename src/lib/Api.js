/**
 * @providesModule @apiNew
 */

import { Platform, AsyncStorage, NetInfo } from 'react-native';

export const updateTimeInterval = 2; // Number of hours to cache response
export const API_HTML_ROOT = 'https://pca.techequipt.com.au';
const API_ROOT = 'https://pca.techequipt.com.au/api';
const API_BUNDLE = API_ROOT + '/bundle/';
const API_DISCUSSION_STARTER = API_ROOT + '/discussion-starter/';
const API_DISCUSSION_STARTER_LOG_RESPONSE = API_ROOT + '/discussion-starter/log-response/';
const API_CARD_GAME = API_ROOT + '/card-game/';
const API_CARD_GAME_LOG_RESPONSE = API_ROOT + '/card-game/log-response/';
const API_RESOURCES = API_ROOT + '/resources/';
const API_USER_GUIDE = API_ROOT + '/user-guides/';
const API_GET_HELP = API_ROOT + '/get-help/';
const API_LOOKING_AFTER_YOURSELF = API_ROOT + '/looking-after-yourself/';
const API_PRIVACY_POLICY = API_ROOT + '/privacy-policy/';
const TIMEOUT_IN_MILLISECONDS = updateTimeInterval * 60 * 60 * 1000;

export const ApiDefinitions = {
	card_game: API_CARD_GAME,
	get_help: API_GET_HELP,
	discussion_starter: API_DISCUSSION_STARTER,
	resources: API_RESOURCES,
	user_guides: API_USER_GUIDE,
	looking_after_yourself: API_LOOKING_AFTER_YOURSELF,
	privacy_policy: API_PRIVACY_POLICY,
	bundle: API_BUNDLE
};

// NetInfo workaround due to iOS bug in react native
const onInitialNetConnection = (isConnected) => {
	NetInfo.isConnected.removeEventListener(onInitialNetConnection);
};

NetInfo.isConnected.addEventListener('connectionChange', onInitialNetConnection);

export async function getJSONwithCache(key, bypassCache) {
	/*
  Given a URL, will check if the data needed is in the cache
  (with a timeout of TIMEOUT_IN_MILLISECONDS). If cached data exists,
  will return the data.

  If the device is offline, it try and always use the cache.
  */
  const timestampKey = `timestamp.${key}`;
  const url = ApiDefinitions[key] || key;
  let makeLiveCall = true; // Whether we need to call the live API or use cache.
  let json = null; // Will store the response

  var currentTimestamp = new Date().getTime();
  var cachedTimestamp = await AsyncStorage.getItem(timestampKey);
  if (
    cachedTimestamp &&
    currentTimestamp - cachedTimestamp < TIMEOUT_IN_MILLISECONDS
  ) {
    makeLiveCall = false;
  }

  if ((await NetInfo.isConnected.fetch()) === false) {
    console.log("NetInfo disconnected");
    makeLiveCall = false;
  }

  if (makeLiveCall || bypassCache) {
    console.log("calling live");
    try {
      const response = await fetch(url);
      json = await response.json();
      await AsyncStorage.setItem(key, JSON.stringify(json));
      await AsyncStorage.setItem(timestampKey, new Date().getTime().toString());
    } catch (error) {}
  }
  if (!json) {
    try {
      json = getJSONFromCache(key);
    } catch (error) {
      return null;
    }
  }
  return json;
}

async function getJSONFromCache(key) {
	const cached = await AsyncStorage.getItem(key);
	return JSON.parse(cached);
}

export async function getBundle() {
	// The bundle contains all other API calls and is used for priming the cache
	data = await getJSONwithCache(ApiDefinitions.bundle, true);
	// Update the cache.
	await Object.keys(data).map(async (key) => {
		AsyncStorage.setItem(key, JSON.stringify(data[key]));
	});
}

export async function getDiscussionStarter() {
  return await getJSONwithCache(ApiDefinitions.discussion_starter);
}

export async function getCardGame() {
	return await getJSONwithCache(ApiDefinitions.card_game);
}

export async function getResources() {
	return await getJSONwithCache(ApiDefinitions.resources);
}

export async function getPrivacyPolicy() {
	return await getJSONwithCache(ApiDefinitions.privacy_policy);
}

export async function getLookingAfterYourself() {
  return await getJSONwithCache(ApiDefinitions.looking_after_yourself);
}

export async function getApiData(key) {
  if (key in ApiDefinitions) {
    return await getJSONwithCache(key);
  }
  return null;
}
