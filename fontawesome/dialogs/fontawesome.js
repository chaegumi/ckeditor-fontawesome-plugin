CKEDITOR.dialog.add('fontawesomeDialog', function (editor) {
	return {
		title : editor.lang.fontawesome.editfa,
		resizable : CKEDITOR.DIALOG_RESIZE_BOTH,
		minWidth : 500,
		minHeight : 200,
		contents : [{
				id : 'info',
				elements : [{
						type : 'text',
						id : 'fontsize',
						label : editor.lang.fontawesome.fontsize,
						setup : function (element) {
							this.setValue(element.getStyle('font-size'));
						},
						commit : function (element) {
							var style = this.getValue();
							if (style) {
								element.setStyle('font-size', style);
							} else {
								element.removeStyle('font-size');
							}
						}
					}, {
						type : 'text',
						id : 'facode',
						label : editor.lang.fontawesome.facode,
						setup : function (element) {
							this.setValue(element.getAttribute('class'));
						},
						commit : function (element) {
							var fa = this.getValue();
							if (fa) {
								element.setAttribute('class', fa);
							} else {
								element.removeAttribute('class');
							}
						}
					}, {
						id : 'fahtml',
						type : 'html',
						label : '',
						html : editor.lang.fontawesome.facode_tip
					}
				]
			}
		],
		buttons : [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton],
		onCancel : function () {},
		onload : function () {},
		onOk : function () {
			var dialog = this;
			if (this.insertMode) {
				var fa = editor.document.createElement('i');
				fa.setAttribute('aria-hidden', 'true');
				fa.setAttribute('contenteditable', 'false');
				fa.setStyle('font-size', dialog.getValueOf('info', 'fontsize'));
				fa.setAttribute('class', dialog.getValueOf('info', 'facode'));

				editor.insertElement(fa);
			} else {
				var fa = this.element;
				this.commitContent(fa);
			}
		},
		onShow : function () {
			var selection = editor.getSelection();
			var element = selection.getStartElement();
			if (element)
				element = element.getAscendant('i', true);

			if (!element || element.getAttribute('class').indexOf('fa fa') === -1) {
				element = editor.document.createElement('i');
				this.insertMode = true;
			} else {
				this.insertMode = false;
			}

			this.element = element;
			if (!this.insertMode) {
				this.setupContent(this.element);
			}
		}
	};
});