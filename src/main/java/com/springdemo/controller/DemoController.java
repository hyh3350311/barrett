package com.springdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class DemoController {

    @RequestMapping("/de")
    public String index(){
        return "demo";
    }
}