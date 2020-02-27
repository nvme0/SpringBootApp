package com.backend.app.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class ApiController {
  @RequestMapping(value = "/api")
  public final String api() {
    // You could also navigate to this page directly by going to
    // http://localhost:9001/api/index.html
    // instead we are serving /api/index.html when the /api route is hit.
    return "/api/index.html";
  }
}
