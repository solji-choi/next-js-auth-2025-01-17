package com.ll.standard.search;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum PostSearchKeywordTypeV1 {
    title("title"),
    content("content");

    private final String value;
}