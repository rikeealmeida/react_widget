import { CloseButton } from "../../CloseButton";
import doneUrl from '../../../assets/done.svg';

interface FeedbackSucessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
    onFeedbackRestartRequested
}: FeedbackSucessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                <img className="h-20 w-20" src={doneUrl} alt="Icone de concluído" />
                <span className="text-xl mt-2">Obrigado pelo feedback!</span>
                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}