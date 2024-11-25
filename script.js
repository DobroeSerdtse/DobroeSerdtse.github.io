function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Скопировано: ${text}`);
    }).catch(err => {
        alert('Ошибка при копировании: ' + err);
    });
}
