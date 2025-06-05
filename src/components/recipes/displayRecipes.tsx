

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import type * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActions, FormControl, Input, InputLabel } from "@mui/material"
import { MenuItem } from "@mui/material"
import Select, { type SelectChangeEvent } from "@mui/material/Select"
import type { RootState } from "../../store"
import type { Recipe } from "../../store/recipesSlice"
import type { Category } from "../../server/categoryServer/categoriesSlice"

const DisplayRecipes: React.FC = () => {
  const navig = useNavigate()

  const categories = useSelector((state: RootState) => state.categories.categories)
  const recipes = useSelector((state: RootState) => state.recipes.recipes)

  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [category, setCategory] = useState<string>("")
  const [level, setLevel] = useState<string>("")
  const [time, setTime] = useState<number | undefined>(undefined)

  const handleChangeLevel = (event: SelectChangeEvent<string>) => {
    setLevel(event.target.value)
  }

  const handleChangeCategory = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value)
  }

  useEffect(() => {
    console.log("Filtering recipes with:", { category, time, level })
    console.log("Available recipes:", recipes)

    const filtered = Array.isArray(recipes)
      ? recipes.filter(
          (r) =>
            (!category || r.CategoryId === Number(category)) &&
            (!time || r.Duration <= time) &&
            (!level || r.Difficulty <= Number(level)),
        )
      : []

    console.log("Filtered recipes:", filtered)
    setFilteredRecipes(filtered)
  }, [category, time, level, recipes])

  const handleRecipeClick = (recipe: Recipe) => {
    console.log("Navigating to recipe details:", recipe)
    navig("/recipeDetailes", { state: { recipe } })
  }

  return (
    <div className="background-img backgroundPage">
      <div className="filter">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="category-select-label">קטגוריה</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={category}
            onChange={handleChangeCategory}
            label="קטגוריה"
          >
            <MenuItem value="">
              <em>הכל</em>
            </MenuItem>
            {categories &&
              categories.map((category: Category) => (
                <MenuItem key={category.Id} value={category.Id.toString()}>
                  {category.Name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="time-input">זמן הכנה</InputLabel>
          <Input
            id="time-input"
            type="number"
            placeholder="זמן הכנה"
            onChange={(e) => {
              const value = Number(e.target.value)
              if (!isNaN(value)) {
                setTime(value)
              }
            }}
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="difficulty-select-label">רמת קושי</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={level}
            onChange={handleChangeLevel}
            label="רמת קושי"
          >
            <MenuItem value="">
              <em>הכל</em>
            </MenuItem>
            <MenuItem value="1">קל</MenuItem>
            <MenuItem value="2">בינוני</MenuItem>
            <MenuItem value="3">קשה</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="recipes">
        {filteredRecipes.length === 0 ? (
          <Typography variant="body1" className="no-recipes-message">
            לא נמצאו מתכונים תואמים.
          </Typography>
        ) : (
          filteredRecipes.map((recipe) => (
            <Card key={recipe.Id} sx={{ maxWidth: 345 }} className="cards">
              <CardMedia className="myImg" component="img" height="140" image={recipe?.Img} alt={recipe?.Name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe?.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe?.Description}
                </Typography>
              </CardContent>
              <CardActions>
                <button className="my-button" onClick={() => handleRecipeClick(recipe)}>
                  לפרטי המתכון
                </button>
              </CardActions>
            </Card>
          ))
        )}
      </div>

      <div className="server-status-note">
        <h3>הערה חשובה</h3>
        <p>
          כדי שהאפליקציה תעבוד כראוי, יש לוודא שהשרת פועל בכתובת:
          <br />
          <code>http://localhost:8080</code>
        </p>
        <p>אם אתה מקבל שגיאות חיבור, וודא שהשרת פועל ומגיב בכתובת זו.</p>
      </div>
    </div>
  )
}

export default DisplayRecipes
