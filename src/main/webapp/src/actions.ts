import axios from "axios";
import { Topic } from "./App";

export const getTopics = (apiUrl: string) =>
  axios({
    method: "get",
    url: apiUrl,
    responseType: "json"
  })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });

export const updateTopic = (apiUrl: string, topic: Topic) =>
  axios({
    method: "put",
    url: `${apiUrl}/${topic.id}`,
    data: topic
  })
    .then(response => response)
    .catch(error => {
      throw new Error(error);
    });

export const deleteTopic = (apiUrl: string, topic: Topic) =>
  axios({
    method: "delete",
    url: `${apiUrl}/${topic.id}`,
    data: topic
  })
    .then(response => response)
    .catch(error => {
      throw new Error(error);
    });

export const createTopic = (apiUrl: string, topic: Topic) =>
  axios({
    method: "post",
    url: apiUrl,
    data: topic
  })
    .then(response => response)
    .catch(error => {
      throw new Error(error);
    });

export const getTopicById = (apiUrl: string, id: string) =>
  axios({
    method: "get",
    url: `${apiUrl}/${id}`,
    responseType: "json"
  })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error);
    });
