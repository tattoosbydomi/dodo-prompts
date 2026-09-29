window.PROMPT_DICTIONARY = {
  items: [
    {
      id: "area_scale",
      type: "select",
      label: "Scene scale (spatial size)",
      options: [
        { id: "micro_scale", label: "micro scale" },
        { id: "human_scale", label: "human scale" },
        { id: "room_scale", label: "room scale" },
        { id: "building_scale", label: "building scale" },
        { id: "street_scale", label: "street scale" },
        { id: "city_scale", label: "city scale" },
        { id: "landscape_scale", label: "landscape scale" },
        { id: "cosmic_scale", label: "cosmic scale" }
      ]
    },
    {
      id: "art_style",
      type: "select",
      label: "Historical art style (art movement)",
      options: [
        { id: "minimalism", label: "minimalism" },
        { id: "renaissance", label: "renaissance" },
        { id: "baroque", label: "baroque" },
        { id: "rococo", label: "rococo" },
        { id: "neoclassicism", label: "neoclassicism" },
        { id: "romanticism", label: "romanticism" },
        { id: "realism", label: "realism" },
        { id: "impressionism", label: "impressionism" },
        { id: "expressionism", label: "expressionism" },
        { id: "surrealism", label: "surrealism" }
      ]
    },
    {
      id: "aspect_ratio",
      type: "select",
      label: "Aspect ratio (canvas shape)",
      options: [
        { id: "square_1_1", label: "square 1:1" },
        { id: "portrait_3_4", label: "portrait 3:4" },
        { id: "portrait_9_16", label: "portrait 9:16" },
        { id: "landscape_4_3", label: "landscape 4:3" },
        { id: "landscape_16_9", label: "landscape 16:9" }
      ]
    },
    {
      id: "atmosphere",
      type: "select",
      label: "Atmosphere (air conditions)",
      options: [
        { id: "crystal_clear_air", label: "crystal clear air" },
        { id: "very_clear_air", label: "very clear air" },
        { id: "clear_air", label: "clear air" },
        { id: "slight_haze", label: "slight haze" },
        { id: "moderate_haze", label: "moderate haze" },
        { id: "noticeable_haze", label: "noticeable haze" },
        { id: "thin_fog", label: "thin fog" },
        { id: "dense_fog", label: "dense fog" },
        { id: "heavy_atmosphere", label: "heavy atmosphere" },
        { id: "minimal_visibility", label: "minimal visibility" }
      ]
    },
    {
      id: "background_type",
      type: "select",
      label: "Background type (backdrop style)",
      options: [
        { id: "solid_color_background", label: "solid color background" },
        { id: "gradient_background", label: "gradient background" },
        { id: "patterned_background", label: "patterned background" },
        { id: "abstract_background", label: "abstract background" },
        { id: "silhouette_background", label: "silhouette background" },
        { id: "empty_backdrop", label: "empty backdrop" },
        { id: "stage_backdrop", label: "stage backdrop" },
        { id: "textured_backdrop", label: "textured backdrop" },
        { id: "decorative_lines_and_shapes_background", label: "decorative lines and shapes background" },
        { id: "foreground_integrated_background", label: "foreground-integrated background" }
      ]
    },
    {
      id: "brushwork",
      type: "select",
      label: "Texture marks (brushwork feel)",
      options: [
        { id: "dry_brush", label: "dry brush" },
        { id: "wet_on_wet", label: "wet-on-wet" },
        { id: "impasto", label: "impasto" },
        { id: "smudged_charcoal", label: "smudged charcoal" },
        { id: "grainy_shading", label: "grainy shading" },
        { id: "smooth_blending", label: "smooth blending" },
        { id: "paint_splatter", label: "paint splatter" }
      ]
    },
    {
      id: "camera_angle",
      type: "select",
      label: "Camera angle / perspective (viewpoint)",
      options: [
        { id: "worm_s_eye_view", label: "worm's-eye view" },
        { id: "low_angle", label: "low angle" },
        { id: "eye_level", label: "eye level" },
        { id: "high_angle", label: "high angle" },
        { id: "bird_s_eye_view", label: "bird's-eye view" }
      ]
    },
    {
      id: "camera_depth_field",
      type: "select",
      label: "Depth of field (focus / blur)",
      options: [
        { id: "deep_depth_of_field", label: "deep depth of field" },
        { id: "balanced_focus", label: "balanced focus" },
        { id: "shallow_depth_of_field", label: "shallow depth of field" },
        { id: "selective_focus", label: "selective focus" },
        { id: "background_blur", label: "background blur" },
        { id: "foreground_blur", label: "foreground blur" },
        { id: "soft_focus", label: "soft focus" },
        { id: "cinematic_blur", label: "cinematic blur" }
      ]
    },
    {
      id: "camera_lens",
      type: "select",
      label: "Lens (focal length)",
      options: [
        { id: "fisheye", label: "fisheye" },
        { id: "ultra_wide_angle", label: "ultra wide angle" },
        { id: "wide_angle", label: "wide angle" },
        { id: "24mm_lens", label: "24mm lens" },
        { id: "35mm_lens", label: "35mm lens" },
        { id: "50mm_lens", label: "50mm lens" },
        { id: "85mm_lens", label: "85mm lens" },
        { id: "135mm_lens", label: "135mm lens" },
        { id: "200mm_lens", label: "200mm lens" },
        { id: "macro_lens", label: "macro lens" }
      ]
    },
    {
      id: "camera_photo_fx",
      type: "select",
      label: "Photo effects (optical / film)",
      options: [
        { id: "fine_grain", label: "fine grain" },
        { id: "vignette", label: "vignette" },
        { id: "chromatic_aberration", label: "chromatic aberration" },
        { id: "noise", label: "noise" },
        { id: "double_exposure", label: "double exposure" }
      ]
    },
    {
      id: "camera_shot_type",
      type: "select",
      label: "Shot type (camera framing)",
      options: [
        { id: "wide_shot", label: "wide shot" },
        { id: "medium_wide_shot", label: "medium wide shot" },
        { id: "medium_shot", label: "medium shot" },
        { id: "medium_close_up", label: "medium close-up" },
        { id: "close_up", label: "close-up" },
        { id: "extreme_close_up", label: "extreme close-up" },
        { id: "profile_shot", label: "profile shot" },
        { id: "silhouette_shot", label: "silhouette shot" }
      ]
    },
    {
      id: "color_grade",
      type: "select",
      label: "Color grading (tone mapping)",
      options: [
        { id: "natural_colors", label: "natural colors" },
        { id: "low_contrast", label: "low contrast color grading" },
        { id: "muted_colors", label: "muted colors" },
        { id: "warm_tones", label: "warm tones" },
        { id: "cold_tones", label: "cold tones" },
        { id: "desaturated", label: "desaturated color grading" },
        { id: "high_contrast", label: "high contrast color grading" },
        { id: "monochrome", label: "monochrome color grading" },
        { id: "teal_and_orange", label: "teal and orange" },
        { id: "bleach_bypass", label: "bleach bypass" }
      ]
    },
    {
      id: "composition",
      type: "select",
      label: "Composition (layout rules)",
      options: [
        { id: "centered_composition", label: "centered composition" },
        { id: "rule_of_thirds", label: "rule of thirds" },
        { id: "balanced_composition", label: "balanced composition" },
        { id: "symmetry", label: "symmetry" },
        { id: "leading_lines", label: "leading lines" },
        { id: "layered_composition", label: "layered composition" },
        { id: "diagonal_composition", label: "diagonal composition" },
        { id: "negative_space", label: "negative space" },
        { id: "golden_ratio", label: "golden ratio" },
        { id: "minimalism", label: "minimalism" }
      ]
    },
    {
      id: "composition_type",
      type: "select",
      label: "Composition style (scene arrangement)",
      options: [
        { id: "coherent", label: "coherent composition" },
        { id: "balanced", label: "balanced framing" },
        { id: "dynamic", label: "dynamic composition" },
        { id: "cinematic", label: "cinematic composition" }
      ]
    },
    {
      id: "design_ethos",
      type: "select",
      label: "Design ideology (aesthetic philosophy)",
      options: [
        { id: "brutalism", label: "brutalism design ethos" },
        { id: "modernism", label: "modernism design ethos" },
        { id: "art_nouveau", label: "art nouveau" },
        { id: "art_deco", label: "art deco" },
        { id: "postmodern", label: "postmodern design ethos" },
        { id: "neo_futurism", label: "neo-futurism design ethos" }
      ]
    },
    {
      id: "detail_level",
      type: "select",
      label: "Detail level (visual complexity)",
      options: [
        { id: "very_low", label: "very low detail" },
        { id: "low", label: "low detail" },
        { id: "medium", label: "medium detail" },
        { id: "high", label: "high detail" },
        { id: "very_high", label: "very high detail" }
      ]
    },
    {
      id: "distance",
      type: "select",
      label: "Distance (spatial level)",
      options: [
        { id: "very_close", label: "very close" },
        { id: "nearby", label: "nearby distance" },
        { id: "medium_distance", label: "medium distance" },
        { id: "far", label: "far distance" },
        { id: "very_far", label: "very far" }
      ]
    },
    {
      id: "environment_background",
      type: "select",
      label: "Background (environment type)",
      options: [
        { id: "studio", label: "studio background" },
        { id: "controlled_interior", label: "controlled interior" },
        { id: "interior", label: "interior background" },
        { id: "semi_open", label: "semi-open environment" },
        { id: "natural", label: "natural environment background" }
      ]
    },
    {
      id: "form_rigidity",
      type: "select",
      label: "Form (physical rigidity)",
      options: [
        { id: "rigid", label: "rigid form" },
        { id: "soft", label: "soft form" },
        { id: "flexible", label: "flexible form" },
        { id: "fluid", label: "fluid form" },
        { id: "amorphous", label: "amorphous form" }
      ]
    },
    {
      id: "form_type",
      type: "select",
      label: "Form (structural type)",
      options: [
        { id: "geometric", label: "geometric form" },
        { id: "organic", label: "organic form" },
        { id: "irregular", label: "irregular form" },
        { id: "complex_organic", label: "complex organic form" }
      ]
    },
    {
      id: "input_medium",
      type: "select",
      label: "Result type (final output)",
      options: [
        { id: "photography", label: "photography" },
        { id: "cinematic_still", label: "cinematic still" },
        { id: "illustration", label: "illustration" },
        { id: "concept_art", label: "concept art" },
        { id: "digital_painting", label: "digital painting" },
        { id: "3d_render", label: "3d render" },
        { id: "anime", label: "anime" },
        { id: "comic_art", label: "comic art" },
        { id: "technical_drawing", label: "technical drawing" },
        { id: "sketch", label: "sketch" },
        { id: "pixel_art", label: "pixel art" },
        { id: "vector_art", label: "vector art" },
        { id: "abstract_art", label: "abstract art" }
      ]
    },
    {
      id: "lighting_direction",
      type: "select",
      label: "Lighting direction (horizontal angle)",
      options: [
        { id: "front_lighting", label: "front lighting" },
        { id: "front_right_lighting", label: "front-right lighting" },
        { id: "right_side_lighting", label: "right-side lighting" },
        { id: "back_right_lighting", label: "back-right lighting" },
        { id: "backlight", label: "backlight" },
        { id: "back_left_lighting", label: "back-left lighting" },
        { id: "left_side_lighting", label: "left-side lighting" },
        { id: "front_left_lighting", label: "front-left lighting" }
      ]
    },
    {
      id: "lighting_intensity",
      type: "select",
      label: "Light intensity (brightness level)",
      options: [
        { id: "barely_visible_light", label: "barely visible light" },
        { id: "dim_light", label: "dim light" },
        { id: "moderate_light", label: "moderate light" },
        { id: "bright_light", label: "bright light" },
        { id: "very_bright_light", label: "very bright light" },
        { id: "blinding_light", label: "blinding light" }
      ]
    },
    {
      id: "lighting_position",
      type: "select",
      label: "Lighting position (light direction)",
      options: [
        { id: "top_lighting", label: "top lighting" },
        { id: "eye_level_lighting", label: "eye-level lighting" },
        { id: "bottom_lighting", label: "bottom lighting" }
      ]
    },
    {
      id: "lighting_quality",
      type: "select",
      label: "Light quality (shadow softness)",
      options: [
        { id: "ultra_soft_light", label: "ultra soft light" },
        { id: "soft_light", label: "soft light" },
        { id: "hard_light", label: "hard light" },
        { id: "harsh_light", label: "harsh light" }
      ]
    },
    {
      id: "lighting_source",
      type: "select",
      label: "Light source (origin type)",
      options: [
        { id: "sunlight", label: "sunlight" },
        { id: "moonlight", label: "moonlight" },
        { id: "fire_light", label: "fire light" },
        { id: "artificial_light", label: "artificial light" },
        { id: "studio_light", label: "studio light" },
        { id: "neon_light", label: "neon light" },
        { id: "screen_light", label: "screen light" },
        { id: "energy_light", label: "energy light" }
      ]
    },
    {
      id: "lighting_temperature",
      type: "select",
      label: "Light temperature (color tone)",
      options: [
        { id: "very_warm_light", label: "very warm light" },
        { id: "warm_light", label: "warm light" },
        { id: "neutral_light", label: "neutral light" },
        { id: "cool_light", label: "cool light" },
        { id: "very_cool_light", label: "very cool light" }
      ]
    },
    {
      id: "lighting_type",
      type: "select",
      label: "Lighting type (functional role)",
      options: [
        { id: "ambient_light", label: "ambient light" },
        { id: "fill_light", label: "fill light" },
        { id: "key_light", label: "key light" },
        { id: "rim_light", label: "rim light" }
      ]
    },
    {
      id: "linework",
      type: "select",
      label: "Line / drawing style (linework)",
      options: [
        { id: "clean_linework", label: "clean linework" },
        { id: "sketchy_linework", label: "sketchy linework" },
        { id: "contour_drawing", label: "contour drawing" },
        { id: "dotwork", label: "dotwork" },
        { id: "stippling", label: "stippling" },
        { id: "hatching", label: "hatching" },
        { id: "cross_hatching", label: "cross-hatching" },
        { id: "manga_lineart", label: "manga lineart" },
        { id: "comic_inking", label: "comic inking" },
        { id: "gesture_drawing", label: "gesture drawing" },
        { id: "rough_sketch", label: "rough sketch" }
      ]
    },
    {
      id: "material_age_condition",
      type: "select",
      label: "Material wear (age & usage)",
      options: [
        { id: "brand_new", label: "brand new" },
        { id: "new", label: "new" },
        { id: "slightly_worn", label: "slightly worn" },
        { id: "worn", label: "worn" },
        { id: "old", label: "old" },
        { id: "very_old", label: "very old" }
      ]
    },
    {
      id: "material_structural_state",
      type: "select",
      label: "Material integrity (structural)",
      options: [
        { id: "pristine", label: "pristine material integrity" },
        { id: "warped", label: "warped material integrity" },
        { id: "cracked", label: "cracked material integrity" },
        { id: "fractured", label: "fractured material integrity" },
        { id: "burned", label: "burned material integrity" },
        { id: "melted", label: "melted material integrity" },
        { id: "collapsed", label: "collapsed material integrity" },
        { id: "destroyed", label: "destroyed material integrity" }
      ]
    },
    {
      id: "material_surface_condition",
      type: "select",
      label: "Surface state (finish & damage)",
      options: [
        { id: "clean", label: "clean surface state" },
        { id: "stained", label: "stained surface state" },
        { id: "moldy", label: "moldy surface state" },
        { id: "wet", label: "wet surface state" },
        { id: "soaked", label: "soaked surface state" },
        { id: "scratched", label: "scratched surface state" },
        { id: "peeled", label: "peeled surface state" },
        { id: "rusted", label: "rusted surface state" },
        { id: "corroded", label: "corroded surface state" }
      ]
    },
    {
      id: "material_type",
      type: "select",
      label: "Material (base type)",
      options: [
        { id: "wood", label: "wood material" },
        { id: "paper", label: "paper material" },
        { id: "fabric", label: "fabric material" },
        { id: "leather", label: "leather material" },
        { id: "plastic", label: "plastic material" },
        { id: "rubber", label: "rubber material" },
        { id: "metal", label: "metal material" },
        { id: "stone", label: "stone material" },
        { id: "concrete", label: "concrete material" }
      ]
    },
    {
      id: "material_weight",
      type: "select",
      label: "Material mass / weight (heaviness)",
      options: [
        { id: "lightweight", label: "lightweight" },
        { id: "delicate", label: "delicate" },
        { id: "thin", label: "thin" },
        { id: "solid", label: "solid" },
        { id: "heavy", label: "heavy" },
        { id: "massive", label: "massive" },
        { id: "bulky", label: "bulky" },
        { id: "monolithic", label: "monolithic" },
        { id: "brutal", label: "brutal" },
        { id: "colossal", label: "colossal" }
      ]
    },
    {
      id: "media_style",
      type: "select",
      label: "Photography / media style (genre look)",
      options: [
        { id: "documentary", label: "documentary media style" },
        { id: "editorial", label: "editorial media style" },
        { id: "cinematic", label: "cinematic media style" },
        { id: "fine_art", label: "fine art" },
        { id: "graphic_novel", label: "graphic novel" }
      ]
    },
    {
      id: "mood",
      type: "select",
      label: "Mood preset (emotional tone)",
      options: [
        { id: "calm", label: "calm mood" },
        { id: "peaceful", label: "peaceful mood" },
        { id: "hopeful", label: "hopeful mood" },
        { id: "romantic", label: "romantic mood" },
        { id: "melancholic", label: "melancholic mood" },
        { id: "mysterious", label: "mysterious mood" },
        { id: "dark", label: "dark mood" },
        { id: "oppressive", label: "oppressive mood" }
      ]
    },
    {
      id: "motion",
      type: "select",
      label: "Motion feel (sense of movement)",
      options: [
        { id: "static", label: "static motion" },
        { id: "subtle movement", label: "subtle movement" },
        { id: "slow motion", label: "slow motion" },
        { id: "flowing", label: "flowing motion" },
        { id: "dynamic", label: "dynamic motion" },
        { id: "fast action", label: "fast action" },
        { id: "explosive", label: "explosive motion" },
        { id: "chaotic", label: "chaotic motion" }
      ]
    },
    {
      id: "realism_level",
      type: "select",
      label: "Realism level (how close to real life)",
      options: [
        { id: "stylized", label: "stylized realism" },
        { id: "semi", label: "semi-realistic" },
        { id: "photo", label: "photorealistic" },
        { id: "hyper", label: "hyper realism" },
        { id: "indistinguishable", label: "indistinguishable from real photography" }
      ]
    },
    {
      id: "scene_fx",
      type: "select",
      label: "Scene modifiers (air and particles)",
      options: [
        { id: "light_haze", label: "light haze" },
        { id: "fog", label: "fog" },
        { id: "mist", label: "mist" },
        { id: "rain", label: "rain" },
        { id: "wind_gusts", label: "wind gusts" },
        { id: "dust_particles", label: "dust particles" },
        { id: "embers_in_air", label: "embers in air" },
        { id: "smoke_clouds", label: "smoke clouds" },
        { id: "spark_showers", label: "spark showers" },
        { id: "electrical_sparks", label: "electrical sparks" }
      ]
    },
    {
      id: "spatial_position",
      type: "select",
      label: "Position (relative placement)",
      options: [
        { id: "foreground", label: "in foreground" },
        { id: "background", label: "in background" }
      ]
    },
    {
      id: "stylization",
      type: "select",
      label: "Realism / stylization (real ↔ stylized)",
      options: [
        { id: "naturalistic", label: "naturalistic stylization" },
        { id: "cinematic_realism", label: "cinematic realism" },
        { id: "stylized_realism", label: "stylized realism" },
        { id: "semi_stylized", label: "semi-stylized stylization" },
        { id: "stylized", label: "stylized stylization" },
        { id: "highly_stylized", label: "highly stylized" },
        { id: "illustrative", label: "illustrative stylization" },
        { id: "graphic", label: "graphic stylization" },
        { id: "abstract", label: "abstract stylization" }
      ]
    },
    {
      id: "surface_texture",
      type: "select",
      label: "Surface (texture level)",
      options: [
        { id: "smooth_surface", label: "smooth surface" },
        { id: "soft_surface", label: "soft surface" },
        { id: "matte_surface", label: "matte surface" },
        { id: "satin_finish", label: "satin finish" },
        { id: "glossy_surface", label: "glossy surface" },
        { id: "polished_surface", label: "polished surface" },
        { id: "rough_surface", label: "rough surface" },
        { id: "gritty_surface", label: "gritty surface" },
        { id: "jagged_surface", label: "jagged surface" },
        { id: "organic_irregular_surface", label: "organic irregular surface" }
      ]
    },
    {
      id: "tech_material",
      type: "select",
      label: "Tech material type (manufacturing feel)",
      options: [
        { id: "natural_materials", label: "natural materials" },
        { id: "handcrafted_materials", label: "handcrafted materials" },
        { id: "industrial_materials", label: "industrial materials" },
        { id: "machinery_parts", label: "machinery parts" },
        { id: "high_tech_materials", label: "high-tech materials" },
        { id: "synthetic_materials", label: "synthetic materials" },
        { id: "carbon_fiber", label: "carbon fiber" },
        { id: "nanomaterials", label: "nanomaterials" },
        { id: "biomechanical_matter", label: "biomechanical matter" },
        { id: "alien_matter", label: "alien matter" }
      ]
    },
    {
      id: "tech_style",
      type: "select",
      label: "Tech style (tech vibe)",
      options: [
        { id: "low_tech", label: "low tech" },
        { id: "industrial", label: "industrial" },
        { id: "dieselpunk", label: "dieselpunk" },
        { id: "steampunk", label: "steampunk" },
        { id: "cyberpunk", label: "cyberpunk" },
        { id: "hi_tech", label: "hi-tech" },
        { id: "sci_fi", label: "sci-fi" },
        { id: "hard_sci_fi", label: "hard sci-fi" },
        { id: "biotech", label: "biotech" },
        { id: "post_tech", label: "post-tech" }
      ]
    },
    {
      id: "technique",
      type: "select",
      label: "Medium / technique (how it’s made)",
      options: [
        { id: "watercolor", label: "watercolor" },
        { id: "gouache_painting", label: "gouache painting" },
        { id: "oil_painting", label: "oil painting" },
        { id: "acrylic_painting", label: "acrylic painting" },
        { id: "ink_drawing", label: "ink drawing" },
        { id: "charcoal_drawing", label: "charcoal drawing" },
        { id: "graphite_pencil_drawing", label: "graphite pencil drawing" },
        { id: "pastel_drawing", label: "pastel drawing" },
        { id: "digital_painting", label: "digital painting" }
      ]
    },
    {
      id: "time_feel",
      type: "select",
      label: "Time feel (moment pacing)",
      options: [
        { id: "frozen_moment", label: "frozen moment" },
        { id: "slow_time", label: "slow time" },
        { id: "lingering", label: "lingering" },
        { id: "real_time", label: "real-time" },
        { id: "flowing_time", label: "flowing time" },
        { id: "accelerated", label: "accelerated" },
        { id: "compressed_time", label: "compressed time" },
        { id: "timeless", label: "timeless" },
        { id: "dreamlike_time", label: "dreamlike time" },
        { id: "fragmented_time", label: "fragmented time" }
      ]
    },
    {
      id: "time_period",
      type: "select",
      label: "Era / time period (setting time)",
      options: [
        { id: "ancient", label: "ancient era" },
        { id: "medieval", label: "medieval era" },
        { id: "industrial_age", label: "industrial age" },
        { id: "early_modern", label: "early modern" },
        { id: "modern", label: "modern era" },
        { id: "contemporary", label: "contemporary era" },
        { id: "near_future", label: "near future" },
        { id: "far_future", label: "far future" },
        { id: "post_human", label: "post-human era" }
      ]
    },
    {
      id: "tool",
      type: "select",
      label: "Tool / instrument (drawing tool)",
      options: [
        { id: "fineliner_pen", label: "fineliner pen" },
        { id: "brush_pen", label: "brush pen" },
        { id: "marker", label: "marker" },
        { id: "airbrush", label: "airbrush" },
        { id: "spray_paint", label: "spray paint" },
        { id: "mixed_media", label: "mixed media" }
      ]
    },
    {
      id: "view_angle",
      type: "select",
      label: "View (camera angle)",
      options: [
        { id: "facing_forward", label: "facing forward" },
        { id: "three_quarter", label: "three-quarter view" },
        { id: "side", label: "side view" },
        { id: "top", label: "top view" },
        { id: "bottom", label: "bottom view" },
        { id: "tilted", label: "tilted view" }
      ]
    },
    {
      id: "visual_density",
      type: "select",
      label: "Visual density (how busy it is)",
      options: [
        { id: "empty", label: "empty visual density" },
        { id: "sparse", label: "sparse visual density" },
        { id: "balanced", label: "balanced visual density" },
        { id: "dense", label: "dense visual density" },
        { id: "cluttered", label: "cluttered visual density" },
        { id: "visual noise", label: "visual noise" }
      ]
    },
    {
      id: "lighting_effect",
      type: "select",
      label: "Lighting effect (visual light behavior)",
      options: [
        { id: "volumetric_light", label: "volumetric light" },
        { id: "god_rays", label: "god rays" },
        { id: "light_beams", label: "light beams" },
        { id: "glow", label: "glow" },
        { id: "bloom", label: "bloom" },
        { id: "haze", label: "haze" },
        { id: "fog_diffusion", label: "fog diffusion" },
        { id: "light_leak", label: "light leak" },
        { id: "lens_flare", label: "lens flare" },
        { id: "halo", label: "halo" }
      ]
    },
    {
      id: "artist_ref",
      type: "text",
      label: "Artist inspiration (name references)",
      placeholder: "inspired by leonardo da vinci, giger, peter mohrbacher"
    },
    {
      id: "negative_words",
      type: "text",
      label: "Negative prompt",
      placeholder: "enter negative prompt"
    },
    {
      id: "brand_text",
      type: "text",
      label: "Brand name or text in the image",
      placeholder: "Nike"
    },
    {
      id: "object_identity_form",
      type: "text",
      label: "Identity & form (what it is)",
      placeholder: "confident girl in a leather jacket"
    },
    {
      id: "object_material_texture",
      type: "text",
      label: "Material & texture (surface)",
      placeholder: "smooth skin, worn leather texture"
    },
    {
      id: "object_pose_position",
      type: "text",
      label: "Pose / position (in space)",
      placeholder: "standing still, relaxed posture"
    },
    {
      id: "object_action_state",
      type: "text",
      label: "Action / state (what it does)",
      placeholder: "looking straight into the camera"
    },
    {
      id: "object_relation_interaction",
      type: "text",
      label: "Relation (to main object)",
      placeholder: "sport motorcycle parked behind her"
    },
    {
      id: "custom_detail",
      type: "text",
      label: "Custom input",
      placeholder: "type here..."
    }
  ]
};
