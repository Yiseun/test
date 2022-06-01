package dev.sample.demo.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.sample.demo.model.Todo;
import dev.sample.demo.service.TodoService;

//@Controller //jsp 페이지는 리액트가 해주니깐 필요없음
@RestController //component 스캔에 들어온다 //뒤에껀 localhost:8080/api/v1까지 작성해야 TodoController에 접근할수있음
@RequestMapping("api/v1")
public class TodoController {
//	@RequestMapping //("api/v1")이건 위에서 적어줘서 필요없음
//	public void find() {
//		
//	}
//	
//	@RequestMapping //("api/v1")이건 위에서 적어줘서 필요없음
//	public void save() {
//		
//	}
	@Autowired // 필드를 통한 인젝션(주입, DI) //오토와이어드는 현업에서 사용하냐마냐는 다른데 버그찾기가 어려워서 그래도 개념은 알아야한다
	private TodoService todoservice; // = new TodoServiceImpl(); //IoC라는애가와서 내가해줄게 하던게 어디였지 //new 지우고 선언만하고 autowired로 씀
	//todoService에 인스턴스를 넣어주는거다 스프링에서
	//todoservice라는애가 autowired가 될려면 어떻게되어있어야할까?
	//@controller ,@bean을 쓰려면 
	//@RestController // @controller(=@Component) + @ResponseBody
	//스프링컨텍스트에 등록이 되어있어야하는데
	@GetMapping
	public List<Todo> findAll() {
		// 실제 DB에 접근해서 전체 Todo 가져오는 코드 작성

		//todoservice.findAll(); //위에 초기화 안된상태에서 findAll하면 nullpointer뜰거다 null이니깐
		
		
		return todoservice.findAll(); //메서드 그자체를 반환
	}
	
	
	
	
	
	
	
	// post요청, String save(), "save() called!"
	@PostMapping
	public String save() { //포스트니깐 파라미터로 값을 받아야겠지?
		return "save() called!";
	}
	
	@PostMapping
	public Todo save(@RequestBody Todo todo) {
		//PostMapping인데 뒤에 경로없으면 똑같은 경로
		//@RequestBod - 클라이언트에서 보낸값을 Todo의 필드와 맵핑해서 객체 형태로
		return todoservice.save(todo);
			
	}
	
	@PutMapping
	public List<Todo> update(@RequestBody Todo todo){
		return todoservice.update(todo);
	}
	
	
	
}
