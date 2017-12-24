---
title: Elements
header:
  overlay_image: "/assets/images/unsplash-image-1.jpg"
categories:
- Markup
permalink: elements
layout: single
---
<div class="coloralternate container-fluid">
<div class="container row margin-topbottom-null" markdown="block">
<div class="col-md-12" markdown="block">

A variety of common markup showing how the theme styles them.

## Header two

### Header three

#### Header four

##### Header five

###### Header six

> Single line blockquote.

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I'm actually as proud of the things we haven't done as the things I have done. Innovation is saying no to 1,000 things.

<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}


| Employee         | Salary |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | $1     | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | $100K  | For all the blogging she does.                               |
| [Fred Bloggs](#) | $100M  | Pictures are worth a thousand words, right? So Jane × 1,000. |
| [Jane Bloggs](#) | $100B  | With hair like that?! Enough said.                           |

Definition List Title
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

  1. List item one 
      1. List item one 
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

[Default Button](#){: .btn}
[Btn Alt](#){: .btn-alt }
[Btn Alt Shadow](#){: .btn-alt .shadow}

</div>
</div>
</div>
<div class="container-fluid coloralternate">
<div class="container row margin-topbottom-null" markdown="block">
<div class="col-md-12" markdown="block">

## HTML Tags

This is an example of a [link](http://apple.com "Apple").


The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets


"Code is poetry." ---<cite>Cite Tag</cite>

Code Tag Here. `word-wrap: break-word;` Code Tag.

Strike tag <strike>strikeout text</strike>.

The emphasize tag should _italicize_ text.

This tag should denote <ins>inserted</ins> text.

Preformatted Tag.

<pre>
.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
}
</pre>

This is some **bold text**.

</div>
</div>
</div>
<div class="container-fluid coloralternate">
<div class="container row margin-topbottom-null" markdown="block">
<div class="col-md-12" markdown="block">

YouTube video
------------

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/l2Of1-d5E5o?controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Twitter
-------

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🎨 Finally got around to adding all my <a href="https://twitter.com/procreateapp">@procreateapp</a> creations with time lapse videos <a href="https://t.co/1nNbkefC3L">https://t.co/1nNbkefC3L</a> <a href="https://t.co/gcNLJoJ0Gn">pic.twitter.com/gcNLJoJ0Gn</a></p>&mdash; Michael Rose (@mmistakes) <a href="https://twitter.com/mmistakes/status/662678050795094016">November 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


The preferred way of using images is placing them in the `/assets/images/` directory and referencing them with an absolute path. Prepending the filename with `{% raw %}{{ site.url }}{{ site.baseurl }}/assets/images/{% endraw %}` will make sure your images display properly in feeds and such.

Standard image with no width modifier classes applied.


![Unsplash image 9]({{ site.url }}{{ site.baseurl }}/assets/images/unsplash-image-9.jpg)

Photo with Caption
------------------

{% include base_path %}

{% capture fig_img %}
![Foo]({{ basepath }}/assets/images/unsplash-gallery-image-3.jpg)
{% endcapture %}

<figure>
  {{ fig_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Photo from Unsplash.</figcaption>
</figure>

Image Alignment
---------------

Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let's get started.

![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-580x300.jpg){: .align-center}

The image above happens to be **centered**.

![image-left]({{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-150x150.jpg){: .align-left} The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**.

As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we'll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it's thing. Mission accomplished!

And now for a **massively large image**. It also has **no alignment**.

![no-alignment]({{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-1200x4002.jpg)

The image above, though 1200px wide, should not overflow the content area. It should remain contained with no visible disruption to the flow of content.

![image-right]({{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-300x200.jpg){: .align-right}

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah --- Just like that. It never felt so good to be right.

And just when you thought we were done, we're going to do them all over again with captions!

<figure class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-580x300.jpg" alt="">
  <figcaption>Look at 580 x 300 getting some love.</figcaption>
</figure> 

The figure above happens to be **centered**. The caption also has a link in it, just to see if it does anything funky.

<figure style="width: 150px" class="align-left">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-150x150.jpg" alt="">
  <figcaption>Itty-bitty caption.</figcaption>
</figure> 

The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**.

As you can see the should be some space above, below, and to the right of the image. The text should not be creeping on the image. Creeping is just not right. Images need breathing room too. Let them speak like you words. Let them do their jobs without any hassle from the text. In about one more sentence here, we'll see that the text moves from the right of the image down below the image in seamless transition. Again, letting the do it's thing. Mission accomplished!

And now for a **massively large image**. It also has **no alignment**.

<figure class="full-bleed">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-1200x4002.jpg" alt="">
  <figcaption>Massive image comment for your eyeballs.</figcaption>
</figure> 

The figure element above has an inline style of `width: 1200px` set which should break it outside of the normal content flow.

<figure style="width: 300px" class="align-right">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/image-alignment-300x200.jpg" alt="">
  <figcaption>Feels good to be right all the time.</figcaption>
</figure> 

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

In just a bit here, you should see the text start to wrap below the right aligned image and settle in nicely. There should still be plenty of room and everything should be sitting pretty. Yeah --- Just like that. It never felt so good to be right.

And that's a wrap, yo! You survived the tumultuous waters of alignment. Image alignment achievement unlocked!

Image Gallery
------------

{% include gallery caption="This is a sample gallery with **Markdown support**." %}
</div>
</div>
</div>

<div class="row">
    <div id ="hotspsotwrap" class="col-md-12">
        <div class="hsmap_center">
            <div id="hotspot-8231" class="hs-wrap responsive hs-loading">
                <img src="assets/images/hspot/solutions_patient_resized.jpg">
                <div class="hs-spot-object" data-type="rect" data-x="29.501563244257" data-y="17.355949870665" data-width="10.125" data-height="9.5030837218337" data-popup-position="left" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Molded in Comfort</h4>
                    <p>The seat is contoured for maximum comfort, even when sitting for an hour or more. The injection molded seat is durable and won’t tear like vinyl seats. This makes a cleaner experience for the patient.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="52.996503274242" data-y="21.204531844247" data-width="10.622563718141" data-height="9.9846623284123" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Movable, Not Removable</h4>
                    <p>Armrests fold back easily for unmatched patient access. By making parts movable, but not removable, chairs are never missing parts and considered “unusable”.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="68.743442304727" data-y="39.848098925314" data-width="10.122313843078" data-height="9.5036907536908" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Stand Assist Armrests</h4>
                    <p>Uniquely designed with a raised and extended touch-point for patients during ingress and egress to encourage nose-over-toes positioning.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="79.615881085336" data-y="68.233920279885" data-width="10.12243878061" data-height="9.86447002072" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Spring Loaded, Flip Up Footrests</h4>
                    <p>Footrests remain in an upright position to provide a clear path of patient ingress and egress to help reduce trip hazards for patients and caregivers.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="11.130561245256" data-y="71.240953755669" data-width="10.372751124438" data-height="9.983852952603" data-popup-position="left" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Big Wheel™ Maneuverability</h4>
                    <p>Utilizes innovation from the manufactures existing stretchers to improve cornering and steering of patients weighing up to 500 lbs. By using wheels that are smaller than traditional wheelchairs, patients are unable to self propel which is a liability for hospitals. It also limits exposure to any harmful materials wheels can pick up as the chair travels throughout the hospital.</p>
                </div>
            </div>
            <div class="hsmap_fixed_tooltip">
            </div>
        </div>
        <div class="hsmap_center">
            <div id="hotspot-7334" class="hs-wrap responsive hs-loading">
                <img src="assets/images/hspot/solutions_caregiver.jpg">
                <div class="hs-spot-object" data-type="rect" data-x="41.252250400679" data-y="10.499929733395" data-width="10.622313843078" data-height="9.8636606449106" data-popup-position="left" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>BackSmart™ Push Handles</h4>
                    <p>Allow caregivers to position their elbows at an ergonomic 90-degree angle during transport and accommodate caregivers of virtually any height.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="59.247877587085" data-y="42.494353134068" data-width="10.372813593203" data-height="9.623276029526" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Upright O2 Tank Holder</h4>
                    <p>Tank is in a permanent position that minimizes the bending and lifting required to place a heavy O2 tank underneath the chair.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="17.382185433162" data-y="41.652399948365" data-width="9.9976886556722" data-height="9.9836506086506" data-popup-position="left" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Hanging Points</h4>
                    <p>Hanging points are integrated into the underside of the seat design for safely hanging items like Foley bags. Keeps bag safe from snags & accidental impact.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="23.755748651553" data-y="59.694803147018" data-width="10.372751124438" data-height="9.7424566174566" data-popup-position="left" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Yellow Activation Points</h4>
                    <p>Indicators intuitively indicate which components are actionable for caregivers and family members. In addition, parts are movable, but not removable, to help reduce the likelihood of lost or stolen components.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="59.997940055851" data-y="81.705373595089" data-width="9.8728135932034" data-height="9.6230736855737" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>One-Touch Central Brake</h4>
                    <p>Enhances caregiver efficiency and is foot-operated to help reduce bending and reaching. Enclosed mechanics protect the braking system from varying climates, and Anti-tip Wheels increase safety.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="74.369941555101" data-y="29.384286117751" data-width="9.9977511244378" data-height="9.743265993266" data-popup-position="right" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Chart Holder</h4>
                    <p>Allows caregivers to completely focus on the patient and their transport, instead of trying to juggle paperwork and other items. An open concept makes the chart holder easy to clean.</p>
                </div>
            </div>
            <div class="hsmap_fixed_tooltip"></div>
        </div>
        <div class="hsmap_center">
            <div id="hotspot-2014" class="hs-wrap responsive hs-loading">
                <img src="assets/images/hspot/solutions_hospital1.jpg">
                <div class="hs-spot-object" data-type="rect" data-x="65.125" data-y="8.2486647335603" data-width="9" data-height="10.160427807487" data-popup-position="bottom" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>IV Pole</h4>
                    <p>Available in multiple colors so that departments can easily identify their equipment.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="23.75" data-y="46.483958851207" data-width="10" data-height="10.026737967914" data-popup-position="top" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Space Saving</h4>
                    <p>Chair dimensions: 40.2”L x 28.3”w x 45”h (73” w/ IV Pole). Designed to Nest. Each nested chair only requires an additional 19 inches of space.</p>
                </div>
                <div class="hs-spot-object" data-type="rect" data-x="82" data-y="69.344921418052" data-width="9.25" data-height="9.7593582887701" data-popup-position="top" data-visible="visible" data-tooltip-width="250" data-tooltip-auto-width="false">
                    <h4>Simple Design & Powder-Coated Steel</h4>
                    <p>A simple, power-washable frame makes cleaning quick and easy.</p>
                </div>
            </div>
            <div class="hsmap_fixed_tooltip"></div>
        </div>  
    </div>
</div>