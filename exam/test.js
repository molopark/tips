const group = {
    title: "팀 A",
    students: ["철수", "영희", "민수"],
    showList() {
    this.students.forEach(student =>
    console.log(`${this.title}: ${student}`)); // this.title 정상 참조
    }
   };
group.showList();

function outer() {
    console.log("상위 함수 인자:", arguments);
   
    const inner = () => {
    // 화살표 함수에서 상위 함수의 arguments 재사용
    console.log("내부 화살표 함수에서 상위 arguments:", arguments);
    };
   
    inner();
}
outer(1, 2, 3);
