

package dev.sample.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.sample.demo.model.Todo;
import dev.sample.demo.repository.TodoRepository;

@Service // @Component의 직관적이 네이밍 표기
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepository repository;

	@Override
	public List<Todo> findAll() {
		// 비즈니스 로직 작성 부분

		// DB 접근해서 데이터 조회 -> service가 하지 않고, DAO, Repository가 한다.
		return repository.findAll();

		// JDBC에서는 ORM 처리가 필요.
		/*
		 * String sql = "SELECT * FROM mouse";
		 * 
		 * // Object(Mouse) Relation(Mouse table) Mapping
		 * Mouse m = new Mouse(); m.setName(rs.getString("name")); 
		 */

	}

	public Todo save(Todo todo) {
		return repository.save(todo);
	}

	@Override
	public List<Todo> update(Todo todo) {
		
		// 기존의 순수 JPA Hibernate
//		Todo todo = em.find(Todo.class, 1L);
		
		// Id값에 의해서 데이터 조회 SELECT * FROM todo WHERE = id
		final Optional<Todo> foundTodo = repository.findById(todo.getId());
		// 간단하게 NullPointer 예외를 방지하기 위함
		
		foundTodo.ifPresent(newTodo -> {//id값에 의한 엔티티가 존재하면(ifPresent)
			newTodo.setDate(todo.getDate());
			newTodo.setDescription(todo.getDescription());
			newTodo.setTitle(todo.getTitle());
			// 지역변수 todo : update할 새로운 데이터
			// newTodo : update완료 후 DB에 persist할 데이터
			
			repository.save(newTodo); // em.persist()
		});
		
		return repository.findAll(); // 전체 데이터 조회
	}

}
