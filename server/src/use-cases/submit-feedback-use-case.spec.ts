import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => { } },
    { sendMail: async () => { } }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemplo',
            screenshot: 'data:image/png;base64asdsad'
        })).resolves.not.toThrow();
    })

    it('should not be able to submit a feedback without type', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        )
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemplo',
            screenshot: 'data:image/png;base64asdsad'
        })).rejects.toThrow();
    })
})