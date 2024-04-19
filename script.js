function redact() {
    const originalText = document.getElementById('originalText').value;
    const wordsToScramble = document.getElementById('wordsToScramble').value.split(' ');
    const replacementChars = document.getElementById('replacementChars').value;

    let redactedText = originalText;
    let stats = {
        wordsScanned: 0,
        wordsMatched: 0,
        charsScrambled: 0,
    };

    wordsToScramble.forEach(word => {
        const regex = new RegExp('\\b' + word + '\\b', 'gi');
        redactedText = redactedText.replace(regex, match => {
            stats.wordsMatched++;
            stats.charsScrambled += match.length;
            return replacementChars;
        });
    });

    stats.wordsScanned = originalText.split(/\s+/).length;

    document.getElementById('redactedText').textContent = redactedText;
    document.getElementById('stats').innerHTML = `
        <p>Words Scanned: ${stats.wordsScanned}</p>
        <p>Words Matched: ${stats.wordsMatched}</p>
        <p>Chars Scrambled: ${stats.charsScrambled}</p>
    `;
}