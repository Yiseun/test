package dev.sample.demo.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//롬복적용해보자 //롬복설치했음
@Builder
@RequiredArgsConstructor   // 생성자요청에맞게 생성자만들어주는거
@AllArgsConstructor
@Setter @Getter
@Entity 
@ToString
//JPA에서 엔티티로 만들겠다고하는 역할
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String title;
	private String description;
	private LocalDate date;

}
