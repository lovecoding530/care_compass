import React, { Component } from 'react';
import {
    Platform,
    AsyncStorage
} from 'react-native';

const API_ROOT = "https://pca.techequipt.com.au/api"
const API_BUNDLE = API_ROOT + "/bundle/"
const API_DISCUSSION_STARTER = API_ROOT + "/discussion-starter/"
const API_CARD_GAME = API_ROOT + "/card-game/"
const API_RESOURCES = API_ROOT + "/resources/"
const API_USER_GUIDE = API_ROOT + "/user-guides/"

export async function getJSONwithCache(url){
    try {
        let response = await fetch(url)
        let json = await response.json() 
        await AsyncStorage.setItem(url, JSON.stringify(json))            
        return json
    } catch (error) {
        console.error(error)
        try {
            const cached = await AsyncStorage.getItem(url)
            return JSON.parse(cached)                    
        } catch (error) {
            return null
        }
    }
}

export async function getBundle() {
    return await getJSONwithCache(API_BUNDLE)
}
