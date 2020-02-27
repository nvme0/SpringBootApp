package com.backend.app.api.topics;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

// This is a "Business Service", it is a singleton
@Service
public class TopicService {

  // TODO - fetch this data from a MySQL database rather than hard code
  private List<Topic> topics = new ArrayList<>(
      Arrays.asList(new Topic("spring", "Spring Framework", "Spring Framework Description"),
          new Topic("java", "Core Java", "Core Java Description"),
          new Topic("javascript", "JavaScript", "JavaScript Description")));

  public List<Topic> getAllTopics() {
    return topics;
  }

  public Topic getTopic(String id) {
    return topics.stream().filter(topic -> topic.getId().equals(id)).findFirst().get();
  }

  public void addTopic(Topic topic) {
    topics.add(topic);
  }

  public void updateTopic(String id, Topic topic) {
    topics.set(topics.indexOf(getTopic(id)), topic);
  }

  public void deleteTopic(String id) {
    topics.removeIf(topic -> topic.getId().equals(id));
  }
}
