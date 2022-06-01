package dev.sample.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.sample.demo.model.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{ // <Entity, PK> //엔티티의 기본키 타입은 Todo.java보면 @Id되어있는 private Long id가 있다 그게 PK인데 그 타입이 Long이다
	

}
