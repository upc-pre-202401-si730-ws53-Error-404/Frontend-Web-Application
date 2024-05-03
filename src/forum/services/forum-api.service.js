import http from "../../shared/services/http-common.js";

export class ForumApiService{

    getQuestions(){
        return http.get("/forum/questions");
    }

    addQuestion(question){
        return http.post("/forum/questions",question);
    }

    getAnswers(){
        return http.get("/forum/answers");
    }
}