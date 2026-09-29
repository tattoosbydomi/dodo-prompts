// structure.js
const { items } = window.PROMPT_ENUMS;

window.PROMPT_STRUCTURE = {
  containers: [
    {
      id: "input",
      icon: "input",
      label: "INPUT",
      items: [
        items.INPUT_MEDIUM,
        items.CUSTOM_DETAIL,
        items.ARTIST_REF
      ]
    },
    {
      id: "main_subject",
      icon: "user",
      label: "MAIN SUBJECT",
      items: [
        items.OBJECT_IDENTITY_FORM,
        items.OBJECT_MATERIAL_TEXTURE,
        items.OBJECT_POSE_POSITION,
        items.OBJECT_ACTION_STATE,
        items.BRAND_TEXT,
        // items.CUSTOM_DETAIL,
        // items.ENTITY_NATURE,
        // items.VIEW_ANGLE,
        // items.MOTION,
        // items.OBJECT_MOTION_STATE,
        // items.MATERIAL_TYPE,
        // items.MATERIAL_AGE_CONDITION,
        // items.MATERIAL_SURFACE_CONDITION,
        // items.MATERIAL_STRUCTURAL_STATE,
        // items.SURFACE_TEXTURE,
        // items.TECH_MATERIAL,
        // items.SPATIAL_POSITION,
        // items.RELATIVE_POSITION_MAIN_SUBJECT,
        // items.FORM_TYPE,
        // items.FORM_RIGIDITY,
        // items.MATERIAL_WEIGHT,
        // items.OBJECT_ROLE,
        // items.OBJECT_INTERACTION,
      ]
    },
    {
      id: "secondary_subject",
      icon: "userplus",
      label: "SECONDARY SUBJECT",
      items: [
        items.OBJECT_IDENTITY_FORM,
        items.OBJECT_RELATION_INTERACTION,
        items.BRAND_TEXT,
        items.CUSTOM_DETAIL,
        // items.ENTITY_NATURE,
        // items.VIEW_ANGLE,
        // items.MOTION,
        // items.OBJECT_MOTION_STATE,
        // items.SPATIAL_POSITION,
        // items.OBJECT_ROLE,
        // items.OBJECT_INTERACTION,
        // items.RELATIVE_POSITION_MAIN_SUBJECT,
        // items.SPATIAL_SCALE,
        // items.MATERIAL_TYPE,
        // items.MATERIAL_AGE_CONDITION,
        // items.MATERIAL_SURFACE_CONDITION,
        // items.MATERIAL_STRUCTURAL_STATE,
        // items.SURFACE_TEXTURE,
        // items.TECH_MATERIAL,
        // items.FORM_TYPE,
        // items.FORM_RIGIDITY,
        // items.MATERIAL_WEIGHT,
      ]
    },
    {
      id: "background",
      icon: "background",
      label: "BACKGROUND",
      items: [
        items.CUSTOM_DETAIL,
        items.BACKGROUND_TYPE,
        items.ENVIRONMENT_BACKGROUND,
        items.VISUAL_DENSITY,
        // items.AREA_SCALE,
        // items.ATMOSPHERE,
        // items.TIME_PERIOD,
        items.DISTANCE,
        items.BRAND_TEXT,
      ]
    },
    {
      id: "atmosphere",
      icon: "globe",
      label: "ATMOSPHERE",
      items: [
        items.ATMOSPHERE,
        items.CUSTOM_DETAIL,
        // items.BRAND_TEXT,
        // items.BACKGROUND_TYPE,
        // items.ENVIRONMENT_BACKGROUND,
        // items.VISUAL_DENSITY,
        // items.TIME_PERIOD,
        // items.DISTANCE,
        // items.AREA_SCALE
      ]
    },
    {
      id: "style",
      icon: "sparkles",
      label: "STYLE",
      items: [
        items.CUSTOM_DETAIL,
        items.TOOL,
        items.LINEWORK,
        items.TECHNIQUE,
        items.BRUSHWORK,
        items.COLOR_GRADE,
        items.MEDIA_STYLE,
        items.ART_STYLE,
        items.STYLIZATION,
        items.TIME_PERIOD,
        items.DESIGN_ETHOS,
        items.TECH_STYLE,
        items.TATTOO_STYLE
        // items.MEDIA_STYLE,
      ]
    },
    {
      id: "camera",
      icon: "camera",
      label: "CAMERA",
      items: [
        items.CUSTOM_DETAIL,
        items.CAMERA_SHOT_TYPE,
        items.CAMERA_ANGLE,
        items.CAMERA_LENS,
        items.CAMERA_DEPTH_FIELD,
        items.MOTION,
        items.MOOD,
        items.COMPOSITION,
        items.CAMERA_PHOTO_FX
        // items.DISTANCE,
        // items.VISUAL_DENSITY,
        // items.COLOR_GRADE,
      ]
    },
    {
      id: "light",
      icon: "sun",
      label: "LIGHT",
      items: [
        items.CUSTOM_DETAIL,
        items.LIGHTING_SOURCE,
        items.LIGHTING_POSITION,
        items.LIGHTING_DIRECTION,
        items.LIGHTING_TYPE,
        items.LIGHTING_QUALITY,
        items.LIGHTING_INTENSITY,
        items.LIGHTING_TEMPERATURE,
        items.LIGHTING_EFFECT
        // items.DISTANCE,
      ]
    },
    {
      id: "output",
      icon: "output",
      label: "OUTPUT",
      items: [
        items.ASPECT_RATIO,
        items.DETAIL_LEVEL,
        items.REALISM_LEVEL,
        items.COMPOSITION_TYPE,
        items.CUSTOM_DETAIL,
        items.NEGATIVE_WORDS
        // items.MEDIA_STYLE,
      ]
    }
  ]
};
