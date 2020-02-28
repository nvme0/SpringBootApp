package com.backend.app.api.topics;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class TopicsController {

  // inject topic service
  @Autowired
  private TopicService topicService;

  @RequestMapping("/api/topics")
  public List<Topic> getAllTopics() {
    // The browser will recieve this as a JSON object
    // The conversion to JSON happens automatically when using the RestController
    return topicService.getAllTopics();
  }

  @RequestMapping("/api/topics/{id}")
  public Topic getTopic(@PathVariable String id) {
    return topicService.getTopic(id);
  }

  @RequestMapping(method = RequestMethod.POST, value = "/api/topics")
  public void addTopic(@RequestBody Topic topic) {
    topicService.addTopic(topic);
  }

  @RequestMapping(method = RequestMethod.PUT, value = "/api/topics/{id}")
  public void updateTopic(@PathVariable String id, @RequestBody Topic topic) {
    topicService.updateTopic(id, topic);
  }

  @RequestMapping(method = RequestMethod.DELETE, value = "/api/topics/{id}")
  public void deleteTopic(@PathVariable String id) {
    topicService.deleteTopic(id);
  }
}
