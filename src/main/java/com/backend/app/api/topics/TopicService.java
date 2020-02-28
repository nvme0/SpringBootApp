package com.backend.app.api.topics;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

// This is a "Business Service", it is a singleton
@Service
public class TopicService {
  private TopicRepository topicRepository;

  public TopicService(TopicRepository topicRepository) {
    this.topicRepository = topicRepository;
  }

  public List<Topic> getAllTopics() {
    return this.topicRepository.findAll();
  }

  public Optional<Topic> getTopic(String id) {
    return this.topicRepository.findById(id);
  }

  public void saveTopic(Topic topic) {
    this.topicRepository.save(topic);
  }

  public void deleteTopic(String id) {
    this.topicRepository.deleteById(id);
  }
}
