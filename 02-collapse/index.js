document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('.collapsible__button'),
		collapseElement = document.querySelector('.collapsible__content'),
		btnSpan = document.querySelectorAll('.collapsible__action');

	toggleActionCollapseElement(collapseElement, 1, 0);
	toggleActionButton(btnSpan[0], 'static', 'absolute');

	function toggleActionCollapseElement(element, start, end) {
		element.animate(
			[
				{ transform: `scale(${start})` },
				{
					transform: `scale(${end})`,
					width: '50%',
					backgroundColor: '#000',
					color: '#fff',
					lineHeight: '56px',
					textAlign: 'center'
				}
			],
			{
				fill: 'forwards',
				duration: 100
			}
		);
	}

	function toggleActionButton(element, start, end) {
		element.animate(
			[
				{ position: start, left: 0 },
				{ position: end, left: '-1000px' }
			],
			{
				fill: 'forwards'
			}
		);
	}

	button.addEventListener('click', (e) => {
		if (e.target.classList.contains('collapsible__action--visible')) {
			toggleActionCollapseElement(collapseElement, 1, 0);
			toggleActionButton(btnSpan[1], 'absolute', 'static');
			toggleActionButton(btnSpan[0], 'static', 'absolute');
		} else {
			toggleActionButton(btnSpan[0], 'absolute', 'static');
			toggleActionButton(btnSpan[1], 'static', 'absolute');
			toggleActionCollapseElement(collapseElement, 0, 1);
		}
	});
});

