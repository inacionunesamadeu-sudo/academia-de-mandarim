
import { TextToSpeech } from '@capacitor-community/text-to-speech';

document.addEventListener('DOMContentLoaded', function () {

    window.falarComVozNativa = async function (texto) {

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
            console.error('Erro na voz:', erro);
            alert('Erro ao reproduzir a voz: ' + erro.message);
        }
    };

});
