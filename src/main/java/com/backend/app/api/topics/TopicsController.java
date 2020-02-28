package com.backend.app.api.topics;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TopicsController {

  // inject topic service
  @Autowired
  private TopicService topicService;

  @RequestMapping("/topics")
  public List<Topic> getAllTopics() {
    // The browser will recieve this as a JSON object
    // The conversion to JSON happens automatically when using the RestController
    return topicService.getAllTopics();
  }

  @RequestMapping("/topics/{id}")
  public Optional<Topic> getTopic(@PathVariable String id) {
    return topicService.getTopic(id);
  }

  @RequestMapping(method = RequestMethod.POST, value = "/topics")
  public void saveTopic(@RequestBody Topic topic) {
    topicService.saveTopic(topic);
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/topics/{id}")
  public void deleteTopic(@PathVariable String id) {
    topicService.deleteTopic(id);
  }
}
