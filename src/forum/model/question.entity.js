export class Question{
    constructor(id, authorId, questionText, categoryId, date){
        this.id = id;
        this.authorId = authorId;
        this.questionText = questionText;
        this.categoryId = categoryId;
        this.date = date;
    }
    static fromDisplayableQuestion(displayableQuestion) {
        return new Question(
            displayableQuestion.id,
            displayableQuestion.authorId,
            displayableQuestion.questionText,
            displayableQuestion.categoryId,
            displayableQuestion.date
        );
    }
    static toDisplayableQuestion(question) {
        return {
            id: question.id,
            userName: question.authorId,
            ask: question.questionText,
            category: question.categoryId,
            date: question.date
        };
    }
}