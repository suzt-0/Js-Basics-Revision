import { Cloud, Droplets, Wind, Sun, MapPin, Eye } from 'lucide-react'
import { Card } from '../components/ui/card'

export function WeatherDisplay({ data }) {
  const currentTime = new Date(data.current.time)
  const sunriseTime = new Date(data.daily.sunrise[0])
  const sunsetTime = new Date(data.daily.sunset[0])

  const getWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const index = Math.round((degrees % 360) / 22.5)
    return directions[index % 16]
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Weather</h1>
        <p className="text-gray-600">Real-time weather conditions and forecast</p>
      </div>

      {/* Current Weather - Main Card */}
      <Card className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-8 md:p-12 rounded-3xl shadow-lg">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-blue-100 text-sm mb-2">Timezone: {data.timezone}</p>
            <p className="text-blue-100 text-sm">{currentTime.toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{data.latitude.toFixed(2)}°, {data.longitude.toFixed(2)}°</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Temperature */}
          <div>
            <div className="text-5xl md:text-6xl font-bold mb-2">{data.current.temperature_2m}°</div>
            <p className="text-blue-100">Current Temperature</p>
          </div>

          {/* Wind */}
          <div className="space-y-4">
            <div>
              <p className="text-blue-100 text-sm mb-2">Wind Speed</p>
              <p className="text-3xl font-bold">{data.current.wind_speed_10m.toFixed(1)}</p>
              <p className="text-blue-100 text-xs">km/h</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Direction: <span className="font-semibold">{getWindDirection(data.current.wind_direction_10m)}</span></p>
            </div>
          </div>

          {/* Precipitation */}
          <div>
            <p className="text-blue-100 text-sm mb-2">Precipitation</p>
            <p className="text-3xl font-bold">{data.current.precipitation}</p>
            <p className="text-blue-100 text-xs">mm</p>
          </div>

          {/* Elevation */}
          <div>
            <p className="text-blue-100 text-sm mb-2">Elevation</p>
            <p className="text-3xl font-bold">{data.elevation}</p>
            <p className="text-blue-100 text-xs">meters</p>
          </div>
        </div>
      </Card>

      {/* Daily Forecast */}
      <Card className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Forecast</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Temperature Range */}
          <div className="bg-linear-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Temperature Range</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">High</p>
                <p className="text-3xl font-bold text-gray-900">{data.daily.temperature_2m_max[0]}°C</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Low</p>
                <p className="text-3xl font-bold text-gray-900">{data.daily.temperature_2m_min[0]}°C</p>
              </div>
            </div>
          </div>

          {/* Sun Times */}
          <div className="bg-linear-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Sun Times</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">Sunrise</p>
                <p className="text-2xl font-bold text-gray-900">{sunriseTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Sunset</p>
                <p className="text-2xl font-bold text-gray-900">{sunsetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Wind className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Wind Speed</p>
              <p className="text-2xl font-bold text-gray-900">{data.current.wind_speed_10m.toFixed(1)} km/h</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Precipitation</p>
              <p className="text-2xl font-bold text-gray-900">{data.current.precipitation} mm</p>
            </div>
          </div>
        </Card>

        <Card className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Elevation</p>
              <p className="text-2xl font-bold text-gray-900">{data.elevation} m</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Location Info */}
      <Card className="bg-linear-to-r from-slate-50 to-slate-100 p-6 rounded-xl shadow-md border border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Latitude</p>
            <p className="text-lg font-semibold text-gray-900">{data.latitude}°</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Longitude</p>
            <p className="text-lg font-semibold text-gray-900">{data.longitude}°</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Timezone</p>
            <p className="text-lg font-semibold text-gray-900">{data.timezone_abbreviation}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">Elevation</p>
            <p className="text-lg font-semibold text-gray-900">{data.elevation} m</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
