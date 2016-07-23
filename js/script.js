animationDelay = 2500;

animateHeadline($('.headline'));

function animateHeadline($headlines) {
	$headlines.each(function() {
		var headline = $(this);
		setTimeout(function() { hideWords(headline.find('.is-visible'))}, animationDelay);
	});
}

function hideWords($word) {
	var nextWord = takeNext($word);
	switchWords($word, nextWord);
	setTimeout(function() { hideWords(nextWord)}, animationDelay);
}

function takeNext($word) {
	return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWords($oldWord, $newWord) {
	$oldWord.removeClass('is-visible').addClass('is-hidden');
	$newWord.removeClass('is-hidden').addClass('is-visible');
}