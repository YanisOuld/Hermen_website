# 📋 Advisory Board - How to Add Members

## Quick Guide to Adding Advisory Board Members

The advisory board section now has **3 slots** total (1 filled + 2 placeholders).

### Current Status
- ✅ **Slot 1**: Boubacar Leye (filled)
- 🔄 **Slot 2**: Coming Soon (placeholder)
- 🔄 **Slot 3**: Coming Soon (placeholder)

---

## How to Add a New Member

### Step 1: Locate the Section
Open `index.html` and find the **Advisory Board Section** (around line 327).

### Step 2: Replace a Placeholder
Look for this placeholder structure:

```html
<!-- Advisory Board Member 2 - PLACEHOLDER: Add your second advisory member here -->
<div class="advisory__member">
    <div class="advisory__photo" aria-hidden="true">        
      <span class="material-icons advisory__placeholder">person</span>                                                                      
    </div>
    <h3 class="advisory__name">Coming Soon</h3>
    <p class="advisory__role">Industry Expert</p>                            
    <p class="advisory__bio">
      We're expanding our advisory board with additional industry leaders...
    </p>
    <span class="advisory__linkedin advisory__linkedin--placeholder">Profile Coming Soon</span>                                                                     
</div>
```

### Step 3: Fill in the Information
Replace with your member's information:

```html
<!-- Advisory Board Member 2 -->
<div class="advisory__member">
    <div class="advisory__photo" aria-hidden="true">        
      <span class="material-icons advisory__placeholder">person</span>                                                                      
    </div>
    <h3 class="advisory__name">John Smith</h3>
    <p class="advisory__role">Chief Technology Officer, Financial Services Inc.</p>                            
    <p class="advisory__bio">
      Over 15 years leading technology initiatives in banking and financial services.
      Expert in digital transformation and regulatory compliance systems.
      Former VP of Engineering at JPMorgan Chase.
    </p>
    <a href="https://www.linkedin.com/in/john-smith/" 
       class="advisory__linkedin" 
       aria-label="LinkedIn profile of John Smith">LinkedIn</a>                                                                     
</div>
```

### Step 4: Key Elements to Update

1. **Name**: `<h3 class="advisory__name">Your Name Here</h3>`
2. **Role**: `<p class="advisory__role">Their Role/Position</p>`
3. **Bio**: 2-4 sentences describing their expertise and background
4. **LinkedIn**: 
   - Change `<span>` to `<a href="...">`
   - Remove `advisory__linkedin--placeholder` class
   - Add `aria-label` for accessibility

---

## Adding More Than 3 Members

If you need more than 3 members, simply copy a complete member block and add it inside the `.advisory__grid` div.

The grid automatically adjusts based on screen size:
- **Desktop**: 4 columns
- **Tablet**: 2 columns  
- **Mobile**: 1 column

---

## Optional: Adding Photos

To add actual photos instead of the placeholder icon:

1. Save the photo in `assets/images/advisory/`
2. Replace the icon div with an img tag:

```html
<div class="advisory__photo">
    <img src="assets/images/advisory/member-name.jpg" alt="Member Name">
</div>
```

Make sure photos are:
- Square (1:1 aspect ratio)
- At least 200x200 pixels
- Optimized for web (JPG or WebP)

---

## Example: Full Real Member

Here's what a complete, filled advisory member looks like:

```html
<div class="advisory__member">
    <div class="advisory__photo" aria-hidden="true">        
      <span class="material-icons advisory__placeholder">person</span>                                                                      
    </div>
    <h3 class="advisory__name">Sarah Johnson</h3>
    <p class="advisory__role">VP of Risk Management, Major Bank</p>                            
    <p class="advisory__bio">
      Sarah brings 20+ years of experience in financial crime prevention and 
      regulatory compliance. She has led AML programs at multiple Fortune 500 
      banks and has deep expertise in KYC/CDD processes and regulatory reporting.
    </p>
    <a href="https://www.linkedin.com/in/sarah-johnson-aml/" 
       class="advisory__linkedin" 
       aria-label="LinkedIn profile of Sarah Johnson">LinkedIn</a>                                                                     
</div>
```

---

## Tips

✅ **Keep bios concise** - 2-4 sentences, focus on relevant expertise  
✅ **Use professional language** - Industry titles and credentials  
✅ **Add LinkedIn profiles** - It increases credibility  
✅ **Update regularly** - Keep member information current  
✅ **Test responsive design** - Check how it looks on mobile  

---

## Questions?

Contact: ouldmayanis@gmail.com
