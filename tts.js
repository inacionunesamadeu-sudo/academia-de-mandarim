here
import { TextToSpeech } from '@capacitor-community/text-to-speech';

window.falarComVozNativa = async function(texto) {
    const temMandarim = /[\u3400-\u9FFF]/.test(texto);

    try {
        await TextToSpeech.stop();

        await TextToSpeech.speak({
            text: texto,
            lang: temMandarim ? 'zh-CN' : 'pt-PT',
            rate: temMandarim ? 0.75 : 0.9,
            pitch: 1,
            volume: 1
        });

    } catch (erro) {
        console.error('Erro na síntese de voz:', erro);
        alert('Não foi possível reproduzir a voz. Verifica o serviço de voz do Android.');
    }
};
