package com.ll.domain.home.home.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Tag(name = "HomeController", description = "홈 컨트롤러")
@Controller
public class HomeController {
    @GetMapping(value = "/", produces = "text/html;charset=utf-8")
    @ResponseBody
    @Operation(summary = "메인페이지", description = "API 서버 메인 페이지")
    public String main() {
        return "API 서버 입니다.";
    }
}
