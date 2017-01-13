tmax_opts = {
  /*repeat: 1,
  repeatDelay: 0.25,*/
  yoyo: false
};

aac_from = {
	x: 0,
	y: 300
}
aac_to = {
	x: 0,
	y: 0
}
seta_from = {
	x: -300,
	y: -300
}
seta_to = {
	x: 0,
	y: 0
}
fb_from = {
	x: 0,
	y: -300
}
fb_to = {
	x: 0,
	y: 0
}

AacLanding = function() {
	var $self = this;
	this.tmax = null;

	this.anim_aac_up = ( new TimelineMax(tmax_opts) )
		//.set( $('#SVGID_AAC_FB > path:first-child'), {y: -300})
		.fromTo( $('#SVGID_AAC_LOGO > path:first-child'),
		0.5,
		aac_from,
		aac_to,
		0)
		.fromTo( $('#SVGID_AAC_SETA > polygon'),
		0.7,
		seta_from,
		seta_to,
		0)
		.stop();

	this.anim_aac_down = ( new TimelineMax(tmax_opts) )
		.fromTo( $('#SVGID_AAC_LOGO > path:first-child'),
		0.5,
		aac_to,
		aac_from,
		0)
		.fromTo( $('#SVGID_AAC_SETA > polygon'),
		0.7,
		seta_to,
		seta_from,
		0)
		.stop();

	this.anim_fb_up = ( new TimelineMax(tmax_opts) )
		.fromTo( $('#SVGID_AAC_FB > path:first-child'),
		0.5,
		fb_to,
		fb_from,
		0)
		.stop();

	this.anim_fb_down = ( new TimelineMax(tmax_opts) )
		.fromTo( $('#SVGID_AAC_FB > path:first-child'),
		0.5,
		fb_from,
		fb_to,
		0)
		.stop();

	// eventos do mouse
	$( 'div.content-wrapper div#svg-container #svg_aac_image' ).hover(
		function(e) {
			$self.anim_aac_down.gotoAndPlay(0);
			$self.anim_fb_down.gotoAndPlay(0);
		},
		function(e) {
			$self.anim_aac_up.gotoAndPlay(0);
			$self.anim_fb_up.gotoAndPlay(0);
	});
}
AacLanding.constructor = AacLanding;
AacLanding.prototype = Object.create( Object.prototype );

var aac; // variavel do objeto principal
//
$(document).ready(function() {

	aac = new AacLanding();

	$("img#aac-bg").on("load", function() {
		aac.anim_aac_up.play();
	})
	
});