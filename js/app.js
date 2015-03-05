/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
(function($){var types=['DOMMouseScroll','mousewheel'];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks;}}
$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false);}}else{this.onmousewheel=handler;}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false);}}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120;}
if(orgEvent.detail){delta=-orgEvent.detail/3;}
deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}
if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}
if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}
args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args);}})(jQuery);
/* https://github.com/adamcoulombe/jquery.customSelect */
(function(a){a.fn.extend({customSelect:function(b){if(!a.browser.msie||(a.browser.msie&&a.browser.version>6)){var c={customClass:null};var b=a.extend(c,b);return this.each(function(){var d=a(this).find(":selected");var f=d.html()||"&nbsp;";var i=a('<span class="customSelectInner" />').append(f);var h=a('<span class="customSelect" />').append(i);if(b.customClass){h.addClass(b.customClass)}a(this).after(h);var g=parseInt(a(this).outerWidth())-(parseInt(h.outerWidth())-parseInt(h.width()));h.css({display:"inline-block"});i.css({width:g,display:"inline-block"});var e=h.outerHeight();a(this).css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:e,fontSize:a(this).next().css("font-size")}).change(function(){i.text(a(this).find(":selected").text()).parent().addClass("customSelectChanged");setTimeout(function(){h.removeClass("customSelectOpen")},60)}).bind("mousedown",function(){h.toggleClass("customSelectOpen")}).focus(function(){h.addClass("customSelectFocus")}).blur(function(){h.removeClass("customSelectFocus customSelectOpen")})})}}})})(jQuery);


/**
 * --------------------------------------------------------------------
 * jQuery customfileinput plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */
jQuery.fn.customFileInput=function(){var fileInput=jQuery(this).addClass('customfile-input').mouseover(function(){upload.addClass('customfile-hover');}).mouseout(function(){upload.removeClass('customfile-hover');}).focus(function(){upload.addClass('customfile-focus');fileInput.data('val',fileInput.val());}).blur(function(){upload.removeClass('customfile-focus');jQuery(this).trigger('checkChange');}).bind('disable',function(){fileInput.attr('disabled',true);upload.addClass('customfile-disabled');}).bind('enable',function(){fileInput.removeAttr('disabled');upload.removeClass('customfile-disabled');}).bind('checkChange',function(){if(fileInput.val()&&fileInput.val()!=fileInput.data('val')){fileInput.trigger('change');}}).bind('change',function(){var fileName=jQuery(this).val().split(/\\/).pop();var fileExt='customfile-ext-'+fileName.split('.').pop().toLowerCase();uploadFeedback.text(fileName).removeClass(uploadFeedback.data('fileExt')||'').addClass(fileExt).data('fileExt',fileExt).addClass('customfile-feedback-populated');uploadButton.text('Change');}).click(function(){fileInput.data('val',fileInput.val());setTimeout(function(){fileInput.trigger('checkChange');},100);});var upload=jQuery('<div class="customfile"></div>');var uploadButton=jQuery('<span class="customfile-button" aria-hidden="true">Browse</span>').appendTo(upload);var uploadFeedback=jQuery('<span class="customfile-feedback" aria-hidden="true">No file selected...</span>').appendTo(upload);if(fileInput.is('[disabled]')){fileInput.trigger('disable');}
upload.mousemove(function(e){fileInput.css({'left':e.pageX-upload.offset().left-fileInput.outerWidth()+20,'top':e.pageY-upload.offset().top-jQuery(window).scrollTop()-3});}).insertAfter(fileInput);fileInput.appendTo(upload);return jQuery(this);};


/**
 * --------------------------------------------------------------------
 dd slick -
 * --------------------------------------------------------------------
 */
(function (a) { function g(a, b) { var c = a.data("ddslick"); var d = a.find(".dd-selected"), e = d.siblings(".dd-selected-value"), f = a.find(".dd-options"), g = d.siblings(".dd-pointer"), h = a.find(".dd-option").eq(b), k = h.closest("li"), l = c.settings, m = c.settings.data[b]; a.find(".dd-option").removeClass("dd-option-selected"); h.addClass("dd-option-selected"); c.selectedIndex = b; c.selectedItem = k; c.selectedData = m; if (l.showSelectedHTML) { d.html((m.imageSrc ? '<img class="dd-selected-image' + (l.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + m.imageSrc + '" />' : "") + (m.text ? '<label class="dd-selected-text">' + m.text + "</label>" : "") + (m.description ? '<small class="dd-selected-description dd-desc' + (l.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + m.description + "</small>" : "")) } else d.html(m.text); e.val(m.value); c.original.val(m.value); a.data("ddslick", c); i(a); j(a); if (typeof l.onSelected == "function") { l.onSelected.call(this, c) } } function h(b) { var c = b.find(".dd-select"), d = c.siblings(".dd-options"), e = c.find(".dd-pointer"), f = d.is(":visible"); a(".dd-click-off-close").not(d).slideUp(50); a(".dd-pointer").removeClass("dd-pointer-up"); if (f) { d.slideUp("fast"); e.removeClass("dd-pointer-up") } else { d.slideDown("fast"); e.addClass("dd-pointer-up") } k(b) } function i(a) { a.find(".dd-options").slideUp(50); a.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up") } function j(a) { var b = a.find(".dd-select").css("height"); var c = a.find(".dd-selected-description"); var d = a.find(".dd-selected-image"); if (c.length <= 0 && d.length > 0) { a.find(".dd-selected-text").css("lineHeight", b) } } function k(b) { b.find(".dd-option").each(function () { var c = a(this); var d = c.css("height"); var e = c.find(".dd-option-description"); var f = b.find(".dd-option-image"); if (e.length <= 0 && f.length > 0) { c.find(".dd-option-text").css("lineHeight", d) } }) } a.fn.ddslick = function (c) { if (b[c]) { return b[c].apply(this, Array.prototype.slice.call(arguments, 1)) } else if (typeof c === "object" || !c) { return b.init.apply(this, arguments) } else { a.error("Method " + c + " does not exists.") } }; var b = {}, c = { data: [], keepJSONItemsOnTop: false, width: 260, height: null, background: "#eee", selectText: "", defaultSelectedIndex: null, truncateDescription: true, imagePosition: "left", showSelectedHTML: true, clickOffToClose: true, onSelected: function () { } }, d = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>', e = '<ul class="dd-options"></ul>', f = ''; if (a("#css-ddslick").length <= 0) { a(f).appendTo("head") } b.init = function (b) { var b = a.extend({}, c, b); return this.each(function () { var c = a(this), f = c.data("ddslick"); if (!f) { var i = [], j = b.data; c.find("option").each(function () { var b = a(this), c = b.data(); i.push({ text: a.trim(b.text()), value: b.val(), selected: b.is(":selected"), description: c.description, imageSrc: c.imagesrc }) }); if (b.keepJSONItemsOnTop) a.merge(b.data, i); else b.data = a.merge(i, b.data); var k = c, l = a('<div id="' + c.attr("id") + '"></div>'); c.replaceWith(l); c = l; c.addClass("dd-container").append(d).append(e); var i = c.find(".dd-select"), m = c.find(".dd-options"); m.css({ width: b.width }); i.css({ width: b.width, background: b.background }); c.css({ width: b.width }); if (b.height != null) m.css({ height: b.height, overflow: "auto" }); a.each(b.data, function (a, c) { if (c.selected) b.defaultSelectedIndex = a; m.append("<li>" + '<a class="dd-option">' + (c.value ? ' <input class="dd-option-value" type="hidden" value="' + c.value + '" />' : "") + (c.imageSrc ? ' <span class="imgDDWrap"><img class="dd-option-image' + (b.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" /></span>' : "") + (c.text ? ' <label class="dd-option-text">' + c.text + "</label>" : "") + (c.description ? ' <small class="dd-option-description dd-desc">' + c.description + "</small>" : "") + "</a>" + "</li>") }); var n = { settings: b, original: k, selectedIndex: -1, selectedItem: null, selectedData: null }; c.data("ddslick", n); if (b.selectText.length > 0 && b.defaultSelectedIndex == null) { c.find(".dd-selected").html(b.selectText) } else { var o = b.defaultSelectedIndex != null && b.defaultSelectedIndex >= 0 && b.defaultSelectedIndex < b.data.length ? b.defaultSelectedIndex : 0; g(c, o) } c.find(".dd-select").on("click.ddslick", function () { h(c) }); c.find(".dd-option").on("click.ddslick", function () { g(c, a(this).closest("li").index()) }); if (b.clickOffToClose) { m.addClass("dd-click-off-close"); c.on("click.ddslick", function (a) { a.stopPropagation() }); a("body").on("click", function () { a(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up") }) } } }) }; b.select = function (b) { return this.each(function () { if (b.index) g(a(this), b.index) }) }; b.open = function () { return this.each(function () { var b = a(this), c = b.data("ddslick"); if (c) h(b) }) }; b.close = function () { return this.each(function () { var b = a(this), c = b.data("ddslick"); if (c) i(b) }) }; b.destroy = function () { return this.each(function () { var b = a(this), c = b.data("ddslick"); if (c) { var d = c.original; b.removeData("ddslick").unbind(".ddslick").replaceWith(d) } }) } })(jQuery)


/**
 * @version		1.0.5
 * @author		JoomlaWorks http://www.joomlaworks.net
 * @copyright	Copyright (c) 2006-2015 JoomlaWorks Ltd. All rights reserved.
 * @license		Commercial
 */

(function($) {

	// Model for rows
	var Row = Backbone.Model.extend({
		defaults : {
			featured : 0
		}
	});

	// Define directory collection along with the default sorting
	var Directory = Backbone.Collection.extend({
		model : Row,
		comparator : function(item) {
			var date = new Date(item.get('date'));
			return -date.getTime();
		}
	});

	// Model for menu items
	var MenuItem = Backbone.Model.extend({
		defaults : {
			parent : 0
		}
	});

	// Define menu collection
	var Menu = Backbone.Collection.extend({
		model : MenuItem
	});

	// Define individual row view
	var RowView = Backbone.View.extend({
		tagName : "article",
		className : "post column four mobile-two small-one",
		template : _.template($("#directory-item-template").html()),
		render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	// Define directory view
	var DirectoryView = Backbone.View.extend({
		el : $("#rows"),
		initialize : function(rows) {
			this.sorting = 'date';
			this.collection = new Directory(rows);
			this.rows = rows;
			this.title = 'Featured';
			this.counter = this.rows.length;
			// this.render();
			this.on("change:sorting", this.sortCollection, this);
			this.on("change:filters", this.filterCollection, this);
			this.collection.on("reset", this.render, this);
			this.collection.on("sort", this.render, this);
			this.setTitle();
		},
		render : function() {
			this.$el.find("article").remove();
			_.each(this.collection.models, function(item) {
				this.renderRow(item);
			}, this);
			setTimeout(liveSizes, 500);
		},
		renderRow : function(row) {
			var rowView = new RowView({
				model : row
			});
			this.$el.append(rowView.render().el);
		},

		// Add ui events
		events : {
			"click a.tag" : "setTag"
		},
		setTag : function(e) {
			e.preventDefault();
			var href = $(e.currentTarget).attr('href');
			var tmp = href.split('/');
			this.tag = tmp[1];
			this.trigger("change:filters", "tag");
		},
		setSorting : function(value) {
			if(this.sorting!=value) {
				this.sorting = value;
				this.trigger("change:sorting");
			}
		},
		setSearch : function(e) {
			e.preventDefault();
			directory.search = $(e.currentTarget).find('#searchword').val();
			directory.trigger("change:filters", "search");
		},
		setTitle : function() {
			$('#title .mainTitle').text(this.title);
			$('#title .mainCounter').text('('+this.counter+')');
		},

		// Set filter property and fire change event
		sortCollection : function() {
			if (this.sorting === 'title') {
				this.collection.comparator = function(row) {
					return row.get("title").toLowerCase();
				};
			} else if (this.sorting === 'featured') {
				this.collection.comparator = function(row) {
					return -row.get("featured");
				};
			} else {
				this.collection.comparator = function(row) {
					var date = new Date(row.get('date'));
					return -date.getTime();
				};
			}
			this.collection.sort();
			// this.collection.reset(this.collection.models);
		},

		// Filter the view
		filterCollection : function(mode) {
			$('#navigation li').removeClass('active');
			this.collection.reset(this.rows, {
				silent : true
			});
			if (mode === 'search') {
				var query = $.trim(this.search);
				query = query.replace(/ /gi, '|');
				var pattern = new RegExp(query, "i");
				var filtered = _.filter(this.collection.models, function(item) {
					return pattern.test(item.get("title")) || pattern.test(item.get("description")) || pattern.test(item.get('tags').join(' '));
				});
				this.collection.reset(filtered);
				this.counter = this.collection.length;
				this.title = 'Search results for ' + this.search;
				this.setTitle();
				router.navigate('search/' + this.search);
			} else {
				if (mode === 'category') {
					var filter = this.category;
					this.title = $('a[href="' + this.path + '"]').find('.title').text();
					$('a[href="' + this.path + '"]').parent().addClass('active');
					router.navigate(this.path);
				} else if (mode === 'tag') {
					var filter = this.tag;
					this.title = this.tag;
					router.navigate('tag/' + this.tag);
				} else if (mode === 'featured') {
					var filter = this.featured;
					this.title = 'Featured';
					$('#featuredFilter').parent().addClass('active');
					router.navigate('/');
				} else if (mode === 'new') {
					var filter = this.isNew;
					this.title = 'New';
					mode = 'isNew';
					$('#newFilter').parent().addClass('active');
					router.navigate('new');
				}
				var active = filter;
				var filtered = _.filter(this.collection.models, function(item) {
					if ( typeof (item.get(mode)) === 'string' || typeof (item.get(mode)) === 'number' || typeof (item.get(mode)) === 'boolean') {
						return item.get(mode) === active;
					} else {
						return _.contains(item.get(mode), active);
					}
				});
				this.collection.reset(filtered);
				this.counter = this.collection.length;
				this.setTitle();
			}
		}
	});

	// Define directory view
	var MenuView = Backbone.View.extend({
		el : $('#navigation'),
		tagName : 'div',
		className : 'menu',
		id : 'menu',
		initialize : function(categories) {
			this.categories = categories;
			this.collection = new Menu(this.categories);
			this.render();
		},
		render : function() {
			var $el = $(this.el);
			var roots = new Array;
			_.each(this.collection.models, function(row) {
				if (row.get('parent') === 0) {
					roots.push(row);
				}
			});

			// Set the featured and new links
			var menu = new Menu(roots);
			var dom = $('<ul class="level-0"><li class="active"><a id="featuredFilter" href="featured"><i class="icon icon-star"></i><span>Featured</span><span class="numOfRows">0</span></a></li><li><a id="newFilter" href="new"><i class="icon icon-leaf"></i><span>New</span><span class="numOfRows">0</span></a></li></ul>');
			var html = this.renderMenu(menu.models, dom, 0);

			// Update num of rows so it works recursively
			$.each(html.find('.numOfRows'), function() {
				var numOfRows = 0;
				var childrenHasNewFlag = false;
				$.each($(this).parent().parent().find('.numOfRows'), function() {
					numOfRows += parseInt($(this).text());
					if ($(this).hasClass('hasNew')) {
						childrenHasNewFlag = true;
					}
				});
				$(this).text(numOfRows);
				if (childrenHasNewFlag) {
					$(this).addClass('hasNew');
				}
			});
			$el.append(html);
			return this;
		},
		renderMenu : function(list, dom, level) {
			_.each(list, function(model) {
				var alias = model.get('alias');
				var children = new Array;
				_.each(this.collection.models, function(row) {
					if (row.get('parent') === alias) {
						children.push(row);
					}
				});
				if (level === 0) {
					dom.append(this.renderRow(model));
				} else {
					dom.find('ul:last').append(this.renderRow(model));
				}
				$('#categories').append('<option value="' + model.get('title') + '">' + this.str_repeat('- ', level) + model.get('title') + '</option>');
				if (children.length > 0) {
					level++;
					dom.find('li:last').append($('<ul class="level-' + level + '"></ul>'));
					var tmp = new Menu(children);
					this.renderMenu(tmp.models, dom, level);
					level--;
				}
			}, this);
			return dom;
		},
		renderRow : function(model) {
			var view = new MenuItemView({
				model : model
			});
			return view.render().el;
		},

		// Add ui events
		events : {
			"click a.category" : "setCategory",
			"click a#featuredFilter" : "setFeaturedFilter",
			"click a#newFilter" : "setNewFilter"
		},
		setCategory : function(e) {
			e.preventDefault();
			var href = $(e.currentTarget).attr('href');
			directory.path = href;
			var tmp = href.split('/');
			directory.category = tmp[tmp.length - 1];
			directory.trigger("change:filters", "category");
			$('#navigation li').removeClass('active');
			$(e.currentTarget).parent().addClass('active');
		},
		setFeaturedFilter : function(e) {
			e.preventDefault();
			directory.featured = 1;
			directory.trigger("change:filters", 'featured');
		},
		setNewFilter : function(e) {
			e.preventDefault();
			directory.isNew = true;
			directory.trigger("change:filters", 'new');
		},
		str_repeat : function(input, multiplier) {
			var y = '';
			while (true) {
				if (multiplier & 1) {
					y += input;
				}
				multiplier >>= 1;
				if (multiplier) {
					input += input;
				} else {
					break;
				}
			}
			return y;
		}
	});

	// Define individual category view
	var MenuItemView = Backbone.View.extend({
		tagName : 'li',
		template : _.template($('#menu-item-template').html()),
		initialize : function(options) {
			_.bindAll(this, 'render');
			this.model.bind('change', this.render);
		},
		events : {},
		close : function() {
			this.unbind();
			this.model.unbind();
		},
		render : function(event) {
			var content = this.template(this.model.toJSON());
			$(this.el).html(content);
			return this;
		}
	});

	// Add routing
	var AppRouter = Backbone.Router.extend({
		routes : {
			"category/*category" : "categoryFilter",
			"tag/:tag" : "tagFilter",
			"featured" : "featuredFilter",
			"" : "featuredFilter",
			"new" : "newFilter",
			"search/:search" : "searchFilter",
		},
		categoryFilter : function(path) {
			directory.path = 'category/' + path;
			var categories = path.split('/');
			var category = _.last(categories);
			directory.category = category;
			directory.trigger("change:filters", 'category');
		},
		tagFilter : function(tag) {
			directory.tag = tag.toLowerCase();
			directory.trigger("change:filters", 'tag');
		},
		featuredFilter : function() {
			directory.featured = 1;
			directory.trigger("change:filters", 'featured');
		},
		newFilter : function() {
			directory.isNew = true;
			directory.trigger("change:filters", 'new');
		},
		searchFilter : function(search) {
			directory.search = search;
			directory.trigger("change:filters", 'search');
		}
	});

	function getCategoryRows(category) {
		if ( typeof (category.rows) !== 'undefined' && category.rows.length > 0) {
			var rows = category.rows;
		} else {
			var rows = new Array;
		}
		return rows;
	}

	function prepareRow(row, category, isNewComparator) {
		row.category = new Array;
		row.category.push(category.alias);
		if (category.parent) {
			row.category.push(category.parent);
		}
		if(row.tags) {
			row.tags = row.tags.toLowerCase().split(',');
		} else {
			row.tags = new Array();
		}
		row.tag = row.tags;

		row.description = wordLimit(row.description, 20); // Set description word limit here

		row.link = row.url;
		if (row.img) {
			row.img = 'images/content/' + row.img;
		} else {
			row.img = 'images/wpt-placeholder.png';
		}
		row.timestamp = new Date(row.date).getTime();
		if (row.timestamp > isNewComparator) {
			row.isNew = true;
		} else {
			row.isNew = false;
		}
		return row;
	}

	function prepareCategory(category) {
		category.alias = category.title.toLowerCase().replace(/( |\s|\\|\/)/g, '-');
		if (category.parent) {
			category.link = category.parentLink + '/' + category.alias;
		} else {
			category.link = 'category/' + category.alias;
		}
		category.children = getCategoryChildren(category);
		category.rows = getCategoryRows(category);
		category.hasNew = false;
		return category;
	}

	function prepareData(json, data, items) {

		// Get the 30 days ago timestamp so we can mark rows as new.
		var isNewComparator = new Date((new Date().getTime()) - 30 * 24 * 60 * 60 * 1000);

		// Iterate through JSON
		$.each(json, function() {
			// Prepare category
			var category = this;
			category = prepareCategory(category);
			category.rows = new Array;
			$.each(items, function() {
				if (this.category == category.id) {
					category.rows.push(this);
				}
			});
			// Fetch category rows and prepare
			var counter = 0;
			$.each(category.rows, function() {
				var row = this;
				row = prepareRow(row, category, isNewComparator);
				if (row.isNew) {
					category.hasNew = true;
				}
				data.rows.push(row);
				counter++;
			});
			// Add the counter to the category
			category.numOfRows = counter;
			if(category.numOfRows > 0 || category.children.length > 0) {
				data.categories.push(category);
			}
			if (category.children) {
				prepareData(category.children, data, items);
			}
		});
	}

	function getCategoryChildren(category) {
		var children = new Array();
		if ( typeof (category.children) !== 'undefined') {
			for (var i = 0; i < category.children.length; i++) {
				category.children[i].parent = category.alias;
				category.children[i].parentLink = category.link;
				children.push(category.children[i]);
				getCategoryChildren(category.children[i]);
			}
		}
		return children;
	}

	// Word Limit
	function wordLimit(text, limit, append) {
		if ( typeof text !== 'string') return '';
		if ( typeof append == 'undefined') var append = '...';
		var parts = text.split(' ');
		if (parts.length > limit) {
			for (var i = parts.length - 1; i > -1; --i) {
				if (i + 1 > limit) {
					parts.length = i;
				}
			}
			parts.push(append);
		}
		return parts.join(' ');
	}

	// Get the data
	$.getJSON('js/data.json?v=20150305_1455', function(json) {
		var data = {
			categories : [],
			rows : []
		};
		prepareData(json.categories, data, json.items);

		// Create instance of directory view
		directory = new DirectoryView(data.rows);

		// Create instance of menu view
		menu = new MenuView(data.categories);

		// Custom select Boxes
		$('#sorting').ddslick({
			selectText : "Sort By:",
			width: 220,
			onSelected : function(data) {
				directory.setSorting(data.selectedData.value);
			}
		});

		$('#searchBlockForm').submit(function(event) {
			directory.setSearch(event);
		});

		// Append "Featured" and "New" links counters and classes
		var collection = new Directory(data.rows);
		var numOfFeatured = 0;
		var numOfNewFeatured = 0;
		var numOfNew = 0;
		_.each(collection.models, function(row) {
			if (row.get('featured')) {
				numOfFeatured++;
				if (row.get('isNew')) {
					numOfNewFeatured++;
				}
			}
			if (row.get('isNew')) {
				numOfNew++;
			}
		});
		$('#featuredFilter .numOfRows').text(numOfFeatured);
		if (numOfNewFeatured > 0) {
			$('#featured .numOfRows').addClass('hasNew');
		}
		$('#newFilter .numOfRows').text(numOfNew);

		/*
		// Add the modal event
		$("#sendSuggestion").click(function(event) {
			event.preventDefault();
			$("#suggestionModal").modal();
		});
		*/

		// Add the tags events
		$('#tags').on('click', '.suggestionFormTag span', function(event) {
			event.preventDefault();
			$(this).parent().remove();
		});
		$('input[name="tagField"]').keypress(function(event) {
			var value = $(this).val();
			if (event.which == 13) {
				event.preventDefault();
				$(this).val('');
				$('#tags').append('<li class="suggestionFormTag">' + value + '<span>X</span><input type="hidden" name="tags[]" value="' + value + '" / ></li>');
			}
		});

		// Equal block heights
		setTimeout(liveSizes, 800);

		// Our Accordion Menu
		$("#navigation ul li").has('ul').addClass('parent closedPane');
		$("#navigation ul li.parent").prepend('<span class="accordionToggle icon icon-right-dir"></span>');
		// the accordion
		$(".accordionToggle").click(function(e) {

			$(this).toggleClass('openPane icon-down-dir icon-right-dir');

			if ($(this).parent().find('ul').is(':visible')) {
				$(this).parent().find('ul').hide(300);
			} else {
				$(this).parent().find('ul').show(300);
			}
		});

		// clicking on any element closes the accordion
		$("#navigation ul li a").click(function(e) {
			// check if it is a sub menu item we are clicking
			if ( $(this).parents().hasClass('parent')  ) {
			// do nothing
			} else {
				$("#navigation ul li").find('ul').hide(300);
				$(".accordionToggle").removeClass('openPane icon-down-dir');
				$(".accordionToggle").addClass('icon-right-dir');
			}
		});

		// Find out the current menu item and show the appropriate ul
		var $activeAcc =  $('#navigation ul li.parent').find('li.active');
		$activeAcc.parent().show();
		$activeAcc.parent().parent().find(".accordionToggle").addClass('openPane');

		// convert menu to a <select> object
		$("<select />").appendTo("nav#navigation");

		// Create default option "Go to..."
		$("<option />", {
			"selected" : "selected",
			"value" : "",
			"text" : "Go to..."
		}).appendTo("nav#navigation select");

		// Populate dropdown with menu items
		$("nav#navigation a").each(function() {
			var el = $(this);
			$("<option />", {
				"value" : el.attr("href"),
				"text" : el.text()
			}).appendTo("nav#navigation select");
		});

		$("nav#navigation select").customSelect();
		$("select#categories").customSelect();

		// Create router instance
		router = new AppRouter();

		// Start history service
		var base = $('base').attr('href');
		if(base!=='http://webplatformtools.org/'){
			base = '/webplatformtools.org/';
		} else {
			base = '/#/';
		}

		Backbone.history.start({
			pushState: true,
			root: base
		});

		// Nav select
		$("nav#navigation select").change(function() {
			router.navigate($(this).find("option:selected").val(), {trigger : true});
		});

	});

	// Layout Stuff
	function liveSizes() {
		// Equal block heights
		$('.postWrapper').css("height","auto");
		var Lblocks = $('.postWrapper');
		var maxHeight = 0;
		Lblocks.each(function() {
			maxHeight = Math.max(maxHeight, parseInt($(this).css('height')));
		});
		Lblocks.css('height', maxHeight);
	}

	$(document).ready(function() {

		// Move footer to bottom on mousewheel - perform only once
		$('body').bind('mousewheel', function(event, delta, deltaX, deltaY) {
			$('footer').animate({
				opacity : 0
			}, 400, function() {
				$('footer').css("position", "absolute");
				$('footer').animate({
					opacity : 100
				});
			});
			$(this).unbind(event);
		});

		// Custom file inputs
		$('#file').customFileInput();

		$('#suggestionFrame').load(function() {
			var response = $('#suggestionFrame')[0].contentWindow.document.body.innerHTML;
			$('#formStatus').removeClass('notice error success').empty();
			if (response === '0') {
				$('#formStatus').addClass('notice error').html('Title is required!');
			} else if (response === '1') {
				$('#formStatus').addClass('notice error').html('Description is required!');
			} else if (response === '2') {
				$('#formStatus').addClass('notice success').html('Your suggestion has been submitted!');
				setTimeout(function() {
					$('.simplemodal-close').trigger('click');
				}, 2000);
			}
		});

	});

	// Window resize
	$(window).resize(function() {
		setTimeout(liveSizes,200);
	});

}(jQuery));
