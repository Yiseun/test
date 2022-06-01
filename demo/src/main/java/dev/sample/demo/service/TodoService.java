package dev.sample.demo.service;

import java.util.List;

import dev.sample.demo.model.Todo;

public interface TodoService {

	// 표준화시킨메서드이름으로 구현?

	List<Todo> findAll();
	
	Todo save(Todo todo);
	
	List<Todo> update(Todo todo);
}
